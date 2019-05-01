import Layout from "../comps/MyLayout";
import fetch from "isomorphic-unfetch";

const Post = props => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, "")}</p>
        <img src={props.show.image.medium} />
        <style jsx>{`
            img {
                height: 250px;
                width: 250px;
            }
        `}</style>
    </Layout>
);

Post.getInitialProps = async function(context) {
    const { id } = context.query
    const res = await fetch (`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show.name}`)

    return { show }
}

export default Post;