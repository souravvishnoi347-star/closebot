-- Table: ai_bot_configs (Stores Gemini AI Bot configuration)
CREATE TABLE IF NOT EXISTS public.ai_bot_configs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    is_enabled BOOLEAN NOT NULL DEFAULT false,
    system_prompt TEXT,
    urls_knowledge TEXT[], -- Array of URLs to crawl
    pdf_knowledge TEXT, -- Extracted text from PDFs
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(user_id)
);

-- Triggers for updated_at
CREATE TRIGGER update_ai_bot_configs_modtime
    BEFORE UPDATE ON public.ai_bot_configs
    FOR EACH ROW
    EXECUTE FUNCTION update_modified_column();

-- Enable RLS
ALTER TABLE public.ai_bot_configs ENABLE ROW LEVEL SECURITY;

-- Policies for ai_bot_configs
CREATE POLICY "Users can view own ai bot config" ON public.ai_bot_configs
    FOR SELECT USING (user_id = (SELECT id FROM public.profiles WHERE user_id = auth.uid()));

CREATE POLICY "Users can manage own ai bot config" ON public.ai_bot_configs
    FOR ALL USING (user_id = (SELECT id FROM public.profiles WHERE user_id = auth.uid()));
