-- Update existing agents to use insurance terminology
UPDATE agents 
SET 
  title = CASE 
    WHEN title LIKE '%Cybersecurity%' THEN REPLACE(title, 'Cybersecurity', 'Verzekering')
    WHEN title LIKE '%Security%' THEN REPLACE(title, 'Security', 'Verzekering')
    WHEN title LIKE '%Compliance%' THEN REPLACE(title, 'Compliance', 'Polis')
    ELSE 'Verzekeringsexpert'
  END,
  description = CASE
    WHEN description LIKE '%cybersecurity%' THEN REPLACE(description, 'cybersecurity', 'verzekering')
    WHEN description LIKE '%security%' THEN REPLACE(description, 'security', 'verzekering')
    WHEN description LIKE '%compliance%' THEN REPLACE(description, 'compliance', 'polis')
    ELSE 'Gespecialiseerd in verzekeringsadvies en polisanalyse'
  END,
  system_prompt = REPLACE(REPLACE(REPLACE(REPLACE(system_prompt, 'cybersecurity', 'verzekering'), 'security', 'verzekering'), 'Flumi', 'PolissBuddy'), 'EU compliance', 'Nederlandse verzekeringen'),
  icon_color = '#079af7',
  icon_bg = '#e3f2fd';

-- Add new insurance-specific agents
INSERT INTO agents (type, title, description, icon, icon_color, icon_bg, system_prompt) 
VALUES 
  ('polis_expert', 'Polisexpert', 'Gespecialiseerd in het analyseren en uitleggen van polisvoorwaarden', 'FileText', '#079af7', '#e3f2fd', 'Je bent een polisexpert die gebruikers helpt met het begrijpen van complexe polisvoorwaarden. Je kunt documenten analyseren, verborgen clausules identificeren en uitleggen wat wel en niet gedekt is.'),
  ('schade_specialist', 'Schadespecialist', 'Hulp bij schademeldingen en claims procedures', 'AlertTriangle', '#079af7', '#e3f2fd', 'Je bent een schadespecialist die gebruikers helpt bij het correct melden van schades en het doorlopen van claims procedures. Je geeft advies over bewijsmateriaal en tijdslijnen.'),
  ('vergelijk_expert', 'Vergelijkingsexpert', 'Vergelijkt verschillende verzekeringen en geeft advies', 'BarChart3', '#079af7', '#e3f2fd', 'Je bent een vergelijkingsexpert die verschillende verzekeringen analyseert en vergelijkt. Je helpt gebruikers de beste keuze maken op basis van hun specifieke behoeften en budget.');