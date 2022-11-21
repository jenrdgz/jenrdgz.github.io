import { Nav } from "../nav/Nav";

export interface PageProps {
    children: any;
}

export function Page(props: PageProps) {
    return (
        <div>
            <Nav />
            {props.children}
        </div>
    );
}