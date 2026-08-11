type ContentWrapperProps = {
    title: string,
    description: string,
    showTitle: boolean,
    children?: React.ReactNode
}

export const ContentWrapper = ({ title, description, showTitle, children }: ContentWrapperProps) => {
    document.title = title    

    if (description) {
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute("content", description);
    }

    return (
        <div>
            {showTitle && <h1>{title}</h1>}
            
            <p>
                {children}
            </p>
        </div>
    )
}
