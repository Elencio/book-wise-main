import { Heading, Text } from '@/components/Typography'
import { AuthButtons } from '@/components/AuthsButtons'
import {
  ContentHeader,
  LoginContainer,
  LogoSection,
  WelcomeSection,
} from '@/styles/pages/login'
import Head from 'next/head'
import Image from 'next/image'

export default function Login() {
  return (
    <LoginContainer>
      <Head>
        <title>Login | BookWise</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>
      <LogoSection>
        <Image
          width={232}
          height={58}
          src="/images/logo.svg"
          alt="BookWise Logo"
        />
      </LogoSection>
      <WelcomeSection>
        <ContentHeader>
          <Heading size="lg" color="orange-500">
            Read.
          </Heading>
          <Heading size="lg" color="cyan-500">
            Write.
          </Heading>
          <Heading size="lg" color="green-500">
            Grow
          </Heading>
        </ContentHeader>
        <Text color="gray-200">Faça seu login ou acesse como visitante.</Text>
        <AuthButtons canGuest />
      </WelcomeSection>
    </LoginContainer>
  )
}
