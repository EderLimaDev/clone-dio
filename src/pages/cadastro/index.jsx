import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import {
  Container,
  Column,
  Row,
  Wrapper,
  SubtitleLogin,
  Title,
  TitleLogin,
  ExplainText,
  NavigateToLoginText,
  SpanText,
} from "./styles";
import { useForm } from "react-hook-form";

export const Cadastro = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    reValidateMode: "onSubmit",
    mode: "onChange",
  });

  const onSubmit = (formData) => {
    try {
        api.post("/users", {
          name: formData.nome,
          email: formData.email,
          senha: formData.senha,
        });
      
      alert("Cadastro Realizado com Sucesso")
      navigate("/login")


    } catch (e) {
      //TODO: HOUVE UM ERRO
    }
  };
  console.log({errors});

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="nome"
                control={control}
                placeholder="Nome Completo"
                leftIcon={<MdPerson color="#8647AD" />}
                required
                {...errors? <SpanText>Campo requerido</SpanText> : null}
              />
              <Input
                name="email"
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail color="#8647AD" />}
                required
              
              />
              
              <Input
                name="senha"
                control={control}
                placeholder="Password"
                type="password"
                leftIcon={<MdLock color="#8647AD" />}
                required
              />
          
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Row>
              <ExplainText>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </ExplainText>
            </Row>
            <Row>
              <NavigateToLoginText>
                Já tenho conta.{" "}
                <SpanText onClick={handleLogin}>Fazer login</SpanText>
              </NavigateToLoginText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};
