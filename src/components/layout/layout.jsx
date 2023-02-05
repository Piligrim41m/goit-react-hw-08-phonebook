import { AppBar } from "components/AppBar/AppBar"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Container } from "./layout.style";

export const Layout = () => {
    return (
        <Container>
            <AppBar />
            <Suspense fallback={'Loading...'}>
                <Outlet/>
            </Suspense>
        </Container>
    )
    // return (
    //     <div>
    //         <AppBar />
    //         <Suspense fallback={'Loadding...'} >
    //             <Outlet />
    //         </Suspense>
    //     </div>
    // )
};