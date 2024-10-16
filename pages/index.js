export async function getStaticProps() {
    // const res = await fetch('https://www.greenpeace.org/international/wp-json/wp/v2/pages?slug=home')
    const res = await fetch('https://www.greenpeace.org/international/wp-json/wp/v2/pages/70')
    const repo = await res.json()
    return { props: { repo } }
}

export default function Page({ repo }) {
    return (
        <div dangerouslySetInnerHTML={{ __html: repo.content.rendered }} />
    )
}
