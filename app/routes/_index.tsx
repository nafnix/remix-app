export async function loader({ request }: LoaderFunctionArgs) {
  const t = await i18n.getFixedT(request)

  const title: string = t("common.welcome")
  const world = t("glossary.world")

  return json({ title, world })
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data!.title },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  const data = useLoaderData<typeof loader>()

  return (
    <div>
      <h1 className="text-3xl">{data.title}</h1>
      <h2 className="text-xl">
        hello:
        {data.world}
      </h2>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  )
}
