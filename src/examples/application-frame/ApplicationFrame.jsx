<ApplicationFrame
    minHeight="400px"
    boxShadow="medium"
    navBar={<BrandedNavBar menuData={{ primaryMenu: [{ name: "Menu Link", href: "/" }] }} />}
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
            <Text fontFamily="mono">main content</Text>
        </>
    </Page>
</ApplicationFrame>