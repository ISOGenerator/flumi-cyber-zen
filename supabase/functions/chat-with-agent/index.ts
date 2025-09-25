import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const agentPrompts = {
  auditor: "Je bent een ISO 27001 Auditor expert. Je helpt met audit voorbereiding en compliance verificatie voor ISO 27001 certificering. Geef concrete, praktische adviezen.",
  consultant: "Je bent een Security Consultant expert. Je geeft strategisch advies voor cybersecurity implementatie en beleid ontwikkeling. Focus op praktische implementatie.",
  standards: "Je bent een Standards Specialist expert in cybersecurity standaarden zoals ISO 27001, NIS2 en GDPR compliance. Geef duidelijke uitleg over regelgeving.",
  implementer: "Je bent een Security Implementer expert. Je helpt met praktische implementatie van security controls en technische beveiligingsmaatregelen. Geef technische instructies."
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, agentId, conversationHistory = [] } = await req.json();
    
    if (!message || !agentId) {
      throw new Error('Message and agentId are required');
    }

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const systemPrompt = agentPrompts[agentId as keyof typeof agentPrompts] || agentPrompts.consultant;

    // Prepare messages for OpenAI
    const messages = [
      { 
        role: 'system', 
        content: `${systemPrompt}\n\nBelangrijk: Eindig elk antwoord met de disclaimer: "⚠️ Controleer altijd de gegeven informatie zelf - dit zijn suggesties, geen definitieve adviezen."` 
      },
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content;

    if (!aiResponse) {
      throw new Error('No response from AI');
    }

    return new Response(JSON.stringify({ 
      response: aiResponse,
      agentId: agentId 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in chat-with-agent function:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'An unknown error occurred'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});