import Sidebar from "./sidebar"

export default function Layout ({children}) {
    return (
        <div className="min-h-screen flex flex-col">
            <Sidebar />
            <main>{children}</main>
        </div>
    )
}