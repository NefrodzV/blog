import { Aside } from "./Aside";
import { Header } from "./Header";
import { PostList } from "./PostList";

export function Home() {
    return(
        <>
            <Header />
            <main>
                <Aside />
                <PostList /> 
            </main>   
        </>
    )
}