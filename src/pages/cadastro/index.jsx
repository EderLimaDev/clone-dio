import { MdEmail, MdLock, MdPerson } from "react-icons/md";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
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
  const { control } = useForm();
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
            <form>
              <Input
                name="nome"
                control={control}
                placeholder="Nome Completo"
                leftIcon={<MdPerson color="#8647AD" />}
              />
              <Input
                name="email"
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail color="#8647AD" />}
              />
              <Input
                name="password"
                control={control}
                placeholder="Password"
                type="password"
                leftIcon={<MdLock color="#8647AD" />}
              />
              <Button title="Criar minha conta" variant="secondary" />
            </form>
            <Row>
              <ExplainText>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </ExplainText>
            </Row>
            <Row>
              <NavigateToLoginText>
                Já tenho conta. <SpanText>Fazer login</SpanText> 
              </NavigateToLoginText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};
