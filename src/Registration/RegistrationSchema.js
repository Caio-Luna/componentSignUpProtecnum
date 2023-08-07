import * as Yup from "yup";

export const registrationSchema = Yup.object({
  empresa: Yup.string().required("Empresa é obrigatória"),  
  cnpj: Yup.string().required("CNPJ é obrigatório").matches(/^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})$/, "CNPJ inválido"),
  email: Yup.string().email("e-mail deve ser um e-mail válido").required("O e-mail é necessário"),  
  password: Yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Por favor entre com sua senha"),
  repassword: Yup.string()
    .required("Senha é obrigatória")
    .oneOf([Yup.ref("password"), null], "As senhas precisam ser iguais"),
});
