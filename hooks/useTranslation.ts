import { useLanguage } from '@/app/providers/LanguageProvider';
import { translations, TranslationKey } from '@/lib/translations';

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations['en'][key];
  };

  return { t, language };
}
