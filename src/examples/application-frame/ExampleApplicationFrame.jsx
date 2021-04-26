<ApplicationFrame
    minHeight="initial"
    boxShadow="medium"
    navBar={<BrandedNavBar menuData={{ primaryMenu }} />}
>
    <Page
        breadcrumbs={
            <Breadcrumbs>
                <Link href="/">Home</Link>
                <Link href="/">Materials</Link>
            </Breadcrumbs>
        }
        title="Materials Overview"
    >
        <>
            <Text fontFamily="mono">// main content</Text>
        </>
    </Page>
</ApplicationFrame>