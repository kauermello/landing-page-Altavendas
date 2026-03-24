import { supabase } from "@/lib/supabase";

export async function insertOrgAndProfile({
  userId,
  nome,
  email,
  empresa,
  vendedores,
  lojas,
}: {
  userId: string;
  nome: string;
  email: string;
  empresa: string;
  vendedores: number;
  lojas: number;
}) {
  const { data: orgData, error: orgError } = await supabase
    .from("organizations")
    .insert({ name: empresa, plano: null, limite_vendedores: vendedores, limite_lojas: lojas })
    .select("id")
    .single();

  if (orgError) {
    console.error("Erro ao salvar organização:", orgError.message);
    return;
  }

  const username = email.split("@")[0];
  const { error: profileError } = await supabase.from("profiles").insert({
    id: userId,
    email,
    org_id: orgData.id,
    role: "admin",
    display_name: nome,
    username,
  });

  if (profileError) {
    console.error("Erro ao salvar perfil:", profileError.message);
  }
}
