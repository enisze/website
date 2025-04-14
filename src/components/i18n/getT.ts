import initTranslations from "@/i18n"

export const getT = async ({ locale }: { locale: string }) => {
    const { t } = await initTranslations({ locale })
    return t
}
