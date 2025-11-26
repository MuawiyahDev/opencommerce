"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function RegistrationForm(props: React.ComponentProps<typeof Card>) {
  const t = useTranslations("auth.register");
  const c = useTranslations("auth.common"); // shared texts

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">{c("fullName")}</FieldLabel>
              <Input
                id="name"
                type="text"
                placeholder={c("fullNamePlaceholder")}
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="email">{c("email")}</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder={c("emailPlaceholder")}
                required
              />
              <FieldDescription>{t("emailNote")}</FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="password">{c("password")}</FieldLabel>
              <Input id="password" type="password" required />
              <FieldDescription>{t("passwordHint")}</FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="confirm-password">
                {t("confirmPassword")}
              </FieldLabel>
              <Input id="confirm-password" type="password" required />
              <FieldDescription>{t("confirmPasswordHint")}</FieldDescription>
            </Field>

            <FieldGroup>
              <Field>
                <Button type="submit">{t("createAccountBtn")}</Button>
                <FieldDescription className="px-6 text-center">
                  {t("alreadyHaveAccount")}{" "}
                  <Link href="/login">{c("signIn")}</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
