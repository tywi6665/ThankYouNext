import Header from './Header'

// const layoutStyle = {
//     margin: 20,
//     padding: 20,
//     border: '1px solid #DDD'
// }

const Layout = props => (
    <div>
        <Header />
        {props.children}
        <style jsx>{`
            div {
                margin: 0 50px 0 50px;
                display: flex;
                align-items: center;
                flex-direction: column;
            }
        `}</style>
    </div>
)

export default Layout