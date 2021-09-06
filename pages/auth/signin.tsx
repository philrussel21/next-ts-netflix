import { GetServerSideProps } from "next"
import { ClientSafeProvider, getProviders, signIn } from "next-auth/client"

type ProviderProps = {
  providers: ClientSafeProvider
}

export default function SignIn({ providers }: ProviderProps) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name} className="bg-red-300">
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
