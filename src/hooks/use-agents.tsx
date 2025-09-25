import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface Agent {
  id: string;
  type: string;
  title: string;
  description: string;
  icon: string;
  icon_color: string;
  icon_bg: string;
  system_prompt: string;
}

export const useAgents = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const { data, error } = await supabase
          .from('agents')
          .select('*')
          .order('created_at');

        if (error) throw error;

        setAgents(data || []);
      } catch (error) {
        console.error('Error fetching agents:', error);
        toast({
          title: "Fout",
          description: "Kon agents niet laden.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, [toast]);

  return { agents, loading };
};