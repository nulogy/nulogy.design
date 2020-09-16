(window.webpackJsonp = window.webpackJsonp || []).push([
  [53],
  {
    YtzZ: function(e, l, t) {
      "use strict";
      t.r(l);
      var a = t("q1tI"),
        n = t.n(a),
        r = t("TJpk"),
        x = t("xj1T"),
        o = t.n(x),
        m = t("3/HP"),
        c = t("Kvkj"),
        i = t("ttvI");
      l.default = function() {
        return n.a.createElement(
          c.h,
          null,
          n.a.createElement(
            r.Helmet,
            null,
            n.a.createElement("title", null, "Layout")
          ),
          n.a.createElement(
            c.e,
            null,
            n.a.createElement(m.fb, null, "Layout"),
            n.a.createElement(
              c.f,
              null,
              "This article provides a breakdown of basic concepts and directions on how to compose the layout of any complexity."
            )
          ),
          n.a.createElement(
            m.u,
            {
              mb: "x8",
              flexDirection: {
                extraSmall: "column",
                small: "row",
                medium: "row"
              }
            },
            n.a.createElement(
              m.u,
              {
                bg: "whiteGrey",
                justifyContent: "center",
                alignItems: "center",
                p: "x3",
                width: { extraSmall: 1, small: 2 / 3, medium: 0.5 },
                height: { extraSmall: "200px", small: "auto", medium: "auto" }
              },
              n.a.createElement(m.d, {
                bg: "darkBlue",
                height: "80px",
                width: "80px",
                mr: "x3"
              }),
              n.a.createElement(m.d, {
                bg: "darkBlue",
                height: "80px",
                width: "80px",
                mr: "x3"
              }),
              n.a.createElement(m.d, {
                bg: "darkBlue",
                height: "80px",
                width: "80px"
              })
            ),
            n.a.createElement(
              m.u,
              {
                bg: "lightGrey",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: "x3",
                width: { extraSmall: 1, small: 1 / 3, medium: 0.5 },
                height: { extraSmall: "200px", small: "auto", medium: "auto" }
              },
              n.a.createElement(m.d, {
                height: "80px",
                width: "80px",
                mb: "x3",
                bg: "blackBlue"
              }),
              n.a.createElement(m.d, {
                height: "80px",
                width: "80px",
                mb: "x3",
                bg: "darkBlue"
              }),
              n.a.createElement(m.d, {
                height: "80px",
                width: "80px",
                bg: "blue"
              })
            )
          ),
          n.a.createElement(
            c.a,
            null,
            n.a.createElement(m.T, null, "Building blocks"),
            n.a.createElement(
              c.c,
              null,
              n.a.createElement(m.E, { href: "/components/box" }, "Box"),
              " and",
              " ",
              n.a.createElement(m.E, { href: "/components/flex" }, "Flex"),
              " components are basic building blocks of any layout composition and are based on CSS box model and CSS flexbox layout model. Listed below are the links that will help you familiarize yourself with these concepts and help you be effective at using Box and Flex components."
            ),
            n.a.createElement(
              m.F,
              { mb: "x3" },
              n.a.createElement(
                m.G,
                null,
                n.a.createElement(
                  m.E,
                  { href: "https://www.w3schools.com/css/css_boxmodel.asp" },
                  "CSS box model"
                )
              ),
              n.a.createElement(
                m.G,
                null,
                n.a.createElement(
                  m.E,
                  {
                    href:
                      "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
                  },
                  "CSS flexbox layout model"
                )
              ),
              n.a.createElement(
                m.G,
                null,
                n.a.createElement(
                  m.E,
                  { href: "https://flexboxfroggy.com/" },
                  "Flexbox Froggy"
                )
              )
            )
          ),
          n.a.createElement(
            c.a,
            null,
            n.a.createElement(m.T, null, "Spacing"),
            n.a.createElement(m.X, null, "Padding and Margins"),
            n.a.createElement(
              c.c,
              null,
              "Padding is used for adding spacing inside of the component and margin is used for adding space around the component."
            ),
            n.a.createElement(
              m.u,
              { bg: "lightGrey", style: { display: "inline-flex" } },
              n.a.createElement(
                m.d,
                null,
                n.a.createElement(
                  m.u,
                  { color: "white", bg: "blackBlue", p: "x3", m: "x3" },
                  "Padding + Margin"
                )
              ),
              n.a.createElement(
                m.d,
                null,
                n.a.createElement(
                  m.u,
                  { color: "white", bg: "blackBlue", p: "x6" },
                  "Padding"
                )
              ),
              n.a.createElement(
                m.d,
                null,
                n.a.createElement(
                  m.u,
                  { color: "white", bg: "blackBlue", m: "x6" },
                  "Margin"
                )
              )
            ),
            n.a.createElement(
              o.a,
              null,
              '<Box bg="blackBlue" p="x3" m="x3">Padding + Margin</Box>\n<Box bg="blackBlue" p="x6">Padding</Box>\n<Box bg="blackBlue" m="x6">Margin</Box>\n'
            ),
            n.a.createElement(
              c.c,
              null,
              n.a.createElement(m.E, { href: "/components/box" }, "Box"),
              " and",
              " ",
              n.a.createElement(m.E, { href: "/components/flex" }, "Flexbox"),
              " components have several style props for handling margins and paddings while adhering to the Design System's ",
              n.a.createElement(
                m.E,
                { href: "/style/spacing" },
                "spacing scale"
              ),
              "."
            )
          ),
          n.a.createElement(
            c.a,
            null,
            n.a.createElement(m.T, null, "Layout Composition"),
            n.a.createElement(
              c.c,
              null,
              "Flexbox is used for composing layouts. Establishing direction, alignment, wrapping, and order is achieved through the use of Flexbox props. Do not use floats to compose layout."
            ),
            n.a.createElement(
              c.b,
              null,
              n.a.createElement(
                m.X,
                { mt: "x3" },
                "Direction (flexDirection prop)"
              ),
              n.a.createElement(
                c.b,
                null,
                n.a.createElement(
                  c.c,
                  { mb: "x2", color: "darkGrey" },
                  "Horizontal layout"
                ),
                n.a.createElement(
                  m.u,
                  { flexDirection: "row", color: "white" },
                  n.a.createElement(
                    m.d,
                    { bg: "blue", m: "x1", py: "x3", px: "x4" },
                    "1"
                  ),
                  n.a.createElement(
                    m.d,
                    { bg: "darkBlue", m: "x1", py: "x3", px: "x4" },
                    "2"
                  ),
                  n.a.createElement(
                    m.d,
                    { bg: "blackBlue", m: "x1", py: "x3", px: "x4" },
                    "3"
                  )
                ),
                n.a.createElement(
                  o.a,
                  null,
                  '<Flex flexDirection="row" color="white">\n  <Box bg="blue" m="x1" py="x3" px="x4">1</Box>\n  <Box bg="darkBlue" m="x1" py="x3" px="x4">2</Box>\n  <Box bg="blackBlue" m="x1" py="x3" px="x4">3</Box>\n</Flex>'
                )
              ),
              n.a.createElement(
                c.b,
                null,
                n.a.createElement(
                  c.c,
                  { mb: "x2", color: "darkGrey" },
                  "Vertical layout"
                ),
                n.a.createElement(
                  m.u,
                  null,
                  n.a.createElement(
                    m.u,
                    { flexDirection: "column", color: "white" },
                    n.a.createElement(
                      m.d,
                      { bg: "blue", m: "x1", py: "x3", px: "x4" },
                      "1"
                    ),
                    n.a.createElement(
                      m.d,
                      { bg: "darkBlue", m: "x1", py: "x3", px: "x4" },
                      "2"
                    ),
                    n.a.createElement(
                      m.d,
                      { bg: "blackBlue", m: "x1", py: "x3", px: "x4" },
                      "3"
                    )
                  )
                ),
                n.a.createElement(
                  o.a,
                  null,
                  '<Flex flexDirection="column" color="white">\n    <Box bg="blue" m="x1" py="x3" px="x4">1</Box>\n    <Box bg="darkBlue" m="x1" py="x3" px="x4">2</Box>\n    <Box bg="blackBlue" m="x1" py="x3" px="x4">3</Box>\n  </Flex>\n</Flex>'
                )
              )
            ),
            n.a.createElement(
              c.b,
              null,
              n.a.createElement(m.X, null, "Wrapping content (flexWrap prop)"),
              n.a.createElement(
                c.c,
                null,
                "By default, Flexbox will try to fit all of its children within the line. In order to force wrapping, you will need to modify flexWrap prop."
              ),
              n.a.createElement(
                c.c,
                { mb: "x2", color: "darkGrey" },
                "Wrapped content"
              ),
              n.a.createElement(
                m.u,
                { flexWrap: "wrap", color: "white" },
                n.a.createElement(
                  m.d,
                  { bg: "blue", m: "x1", p: "x3", width: 1 / 3 },
                  "1"
                ),
                n.a.createElement(
                  m.d,
                  { bg: "darkBlue", m: "x1", p: "x3", width: 0.25 },
                  "2"
                ),
                n.a.createElement(
                  m.d,
                  { bg: "blackBlue", m: "x1", p: "x3", width: 1 / 3 },
                  "3"
                ),
                n.a.createElement(
                  m.d,
                  { bg: "black", m: "x1", p: "x3", width: 0.25 },
                  "4"
                )
              ),
              n.a.createElement(
                o.a,
                null,
                '<Flex flexWrap="wrap" color="white">\n  <Box bg="blue" m="x1" p="x3" width={ 1 / 3 }>1</Box>\n  <Box bg="darkBlue" m="x1" p="x3" width={ 1 / 4 }>2</Box>\n  <Box bg="blackBlue" m="x1" p="x3" width={ 1 / 3 }>3</Box>\n  <Box bg="black" m="x1" p="x3" width={ 1 / 4 }>4</Box>\n</Flex>'
              )
            ),
            n.a.createElement(
              c.b,
              null,
              n.a.createElement(
                m.X,
                null,
                "Alignment (justifyContent, alignItems prop)"
              ),
              n.a.createElement(
                c.c,
                null,
                "Content distribution along the main axis is controlled through justifyContent prop."
              ),
              n.a.createElement(
                c.b,
                null,
                n.a.createElement(
                  c.c,
                  { mb: "x2", color: "darkGrey" },
                  "Left aligned"
                ),
                n.a.createElement(
                  m.u,
                  { justifyContent: "flex-start", color: "white" },
                  n.a.createElement(
                    m.d,
                    { bg: "blue", m: "x1", py: "x3", px: "x4" },
                    "1"
                  ),
                  n.a.createElement(
                    m.d,
                    { bg: "darkBlue", m: "x1", py: "x3", px: "x4" },
                    "2"
                  ),
                  n.a.createElement(
                    m.d,
                    { bg: "blackBlue", m: "x1", py: "x3", px: "x4" },
                    "3"
                  )
                ),
                n.a.createElement(
                  o.a,
                  null,
                  '<Flex justifyContent="flex-start" color="white">\n  <Box bg="blue" m="x1" py="x3" px="x4">1</Box>\n  <Box bg="darkBlue" m="x1" py="x3" px="x4">2</Box>\n  <Box bg="blackBlue" m="x1" py="x3" px="x4">3</Box>\n</Flex>'
                )
              ),
              n.a.createElement(
                c.b,
                null,
                n.a.createElement(
                  c.c,
                  { mb: "x2", color: "darkGrey" },
                  "Centered"
                ),
                n.a.createElement(
                  m.u,
                  { justifyContent: "center", color: "white" },
                  n.a.createElement(
                    m.d,
                    { bg: "blue", m: "x1", py: "x3", px: "x4" },
                    "1"
                  ),
                  n.a.createElement(
                    m.d,
                    { bg: "darkBlue", m: "x1", py: "x3", px: "x4" },
                    "2"
                  ),
                  n.a.createElement(
                    m.d,
                    { bg: "blackBlue", m: "x1", py: "x3", px: "x4" },
                    "3"
                  )
                ),
                n.a.createElement(
                  o.a,
                  null,
                  '<Flex justifyContent="center" color="white">\n  <Box bg="blue" m="x1" py="x3" px="x4">1</Box>\n  <Box bg="darkBlue" m="x1" py="x3" px="x4">2</Box>\n  <Box bg="blackBlue" m="x1" py="x3" px="x4">3</Box>\n</Flex>'
                )
              ),
              n.a.createElement(
                c.b,
                null,
                n.a.createElement(
                  c.c,
                  { mb: "x2", color: "darkGrey" },
                  "Evenly distributed"
                ),
                n.a.createElement(
                  m.u,
                  { justifyContent: "space-between", color: "white" },
                  n.a.createElement(
                    m.d,
                    { bg: "blue", m: "x1", py: "x3", px: "x4" },
                    "1"
                  ),
                  n.a.createElement(
                    m.d,
                    { bg: "darkBlue", m: "x1", py: "x3", px: "x4" },
                    "2"
                  ),
                  n.a.createElement(
                    m.d,
                    { bg: "blackBlue", m: "x1", py: "x3", px: "x4" },
                    "3"
                  )
                ),
                n.a.createElement(
                  o.a,
                  null,
                  '<Flex justifyContent="space-between" color="white">\n  <Box bg="blue" m="x1" py="x3" px="x4">1</Box>\n  <Box bg="darkBlue" m="x1" py="x3" px="x4">2</Box>\n  <Box bg="blackBlue" m="x1" py="x3" px="x4">3</Box>\n</Flex>'
                )
              ),
              n.a.createElement(
                c.c,
                null,
                "Alignment of items on a cross-axis is controlled through alignItems prop."
              ),
              n.a.createElement(
                c.c,
                { mb: "x2", color: "darkGrey" },
                "Vertical centered"
              ),
              n.a.createElement(
                m.u,
                {
                  alignItems: "center",
                  color: "white",
                  bg: "lightGrey",
                  p: "x1",
                  height: "240px"
                },
                n.a.createElement(
                  m.d,
                  { bg: "blue", m: "x1", py: "x3", px: "x4" },
                  "1"
                ),
                n.a.createElement(
                  m.d,
                  { bg: "darkBlue", m: "x1", py: "x3", px: "x4" },
                  "2"
                ),
                n.a.createElement(
                  m.d,
                  { bg: "blackBlue", m: "x1", py: "x3", px: "x4" },
                  "3"
                )
              ),
              n.a.createElement(
                o.a,
                null,
                '<Flex alignItems="center" color="white" bg="lightGrey" p="x1" height="200px">\n  <Box bg="blue" m="x1" py="x3" px="x4">1</Box>\n  <Box bg="darkBlue" m="x1" py="x3" px="x4">2</Box>\n  <Box bg="blackBlue" m="x1" py="x3" px="x4">3</Box>\n</Flex>'
              )
            ),
            n.a.createElement(
              c.b,
              null,
              n.a.createElement(m.X, null, "Order (order prop)"),
              n.a.createElement(
                c.c,
                null,
                "The order prop controls the order in which elements are displayed inside of the Flexbox component."
              ),
              n.a.createElement(
                c.c,
                { mb: "x2", color: "darkGrey" },
                "Changed default order"
              ),
              n.a.createElement(
                m.u,
                { color: "white" },
                n.a.createElement(
                  m.d,
                  { bg: "blue", m: "x1", py: "x3", px: "x4" },
                  "1"
                ),
                n.a.createElement(
                  m.d,
                  { bg: "darkBlue", m: "x1", py: "x3", px: "x4", order: "99" },
                  "2"
                ),
                n.a.createElement(
                  m.d,
                  { bg: "blackBlue", m: "x1", py: "x3", px: "x4", order: "-1" },
                  "3"
                ),
                n.a.createElement(
                  m.d,
                  { bg: "black", m: "x1", py: "x3", px: "x4", order: "1" },
                  "4"
                )
              ),
              n.a.createElement(
                o.a,
                null,
                '<Flex color="white">\n  <Box bg="blue" m="x1" py="x3" px="x4">1</Box>\n  <Box bg="darkBlue" m="x1" py="x3" px="x4" order="99">2</Box>\n  <Box bg="blackBlue" m="x1" py="x3" px="x4" order="-1" >3</Box>\n  <Box bg="black" m="x1" py="x3" px="x4" order="1">4</Box>\n</Flex>'
              )
            ),
            n.a.createElement(
              c.c,
              null,
              "A full breakdown of capabilities and list of available props and their values is available on the ",
              n.a.createElement(m.E, { href: "/components/flex" }, "Flex"),
              " ",
              "component page."
            )
          ),
          n.a.createElement(
            c.a,
            null,
            n.a.createElement(m.T, null, "Width"),
            n.a.createElement(
              c.c,
              null,
              "The width of the Box and Flex component is set through the width prop. Width accepts any number from 0–1 and is converted to a percentage. Numbers greater than 1 are interpreted as pixel values. Relative units (em/rem/vw/vh/%) are passed through string values."
            ),
            n.a.createElement(
              c.c,
              { mb: "x2", color: "darkGrey" },
              "Varoius ways to set a width"
            ),
            n.a.createElement(
              m.u,
              { color: "white" },
              n.a.createElement(
                m.d,
                { width: 0.25, bg: "blue", m: "x1", p: "x3" },
                "1/4"
              ),
              n.a.createElement(
                m.d,
                { width: 0.25, bg: "darkBlue", m: "x1", p: "x3" },
                "0.25"
              ),
              n.a.createElement(
                m.d,
                { width: 140, bg: "blackBlue", m: "x1", p: "x3" },
                "140"
              ),
              n.a.createElement(
                m.d,
                { width: "8.5em", bg: "black", m: "x1", p: "x3" },
                "8.5em"
              )
            ),
            n.a.createElement(
              o.a,
              null,
              '<Flex color="white">\n  <Box width={ 1/4 } bg="blue" m="x1" p="x3">1/4</Box>\n  <Box width={ 0.25 } bg="darkBlue" m="x1" p="x3">0.25</Box>\n  <Box width={ 140 } bg="blackBlue" m="x1" p="x3">140</Box>\n  <Box width="8.5em" bg="black" m="x1" p="x3">8.5em</Box>\n</Flex>'
            )
          ),
          n.a.createElement(
            c.a,
            null,
            n.a.createElement(m.T, null, "Responsiveness"),
            n.a.createElement(
              c.c,
              null,
              "Providing different prop values for different breaking points that are based on the ",
              n.a.createElement(m.E, { href: "/theme" }, "theme.breakpoints"),
              " is possible by passing an object to a prop."
            ),
            n.a.createElement(
              c.c,
              { mb: "x2", color: "darkGrey" },
              "Size and background colour change based on the screen size"
            ),
            n.a.createElement(
              m.u,
              { color: "white" },
              n.a.createElement(
                m.d,
                {
                  width: { extraSmall: 1 / 9, small: 1 / 9, medium: 7 / 9 },
                  bg: {
                    extraSmall: "blue",
                    small: "darkBlue",
                    medium: "blackBlue"
                  },
                  m: "x1",
                  py: "x3",
                  px: "x4"
                },
                "1"
              ),
              n.a.createElement(
                m.d,
                {
                  width: { extraSmall: 1 / 9, small: 7 / 9, medium: 1 / 9 },
                  bg: {
                    extraSmall: "darkBlue",
                    small: "blackBlue",
                    medium: "darkBlue"
                  },
                  m: "x1",
                  py: "x3",
                  px: "x4"
                },
                "2"
              ),
              n.a.createElement(
                m.d,
                {
                  width: { extraSmall: 7 / 9, small: 1 / 9, medium: 1 / 9 },
                  bg: {
                    extraSmall: "blackBlue",
                    small: "blue",
                    medium: "blue"
                  },
                  m: "x1",
                  py: "x3",
                  px: "x4"
                },
                "3"
              )
            ),
            n.a.createElement(
              o.a,
              null,
              '<Flex color="white">\n  <Box width={ { extraSmall: 1 / 9, small: 1 / 9, medium: 7 / 9 } } bg={ { extraSmall: "blue", small: "darkBlue", medium: "blackBlue" } } m="x1" py="x3" px="x4">1</Box>\n  <Box width={ { extraSmall: 1 / 9, small: 7 / 9, medium: 1 / 9 } } bg={ { extraSmall: "darkBlue", small: "blackBlue", medium: "darkBlue" } } m="x1" py="x3" px="x4">2</Box>\n  <Box width={ { extraSmall: 7 / 9, small: 1 / 9, medium: 1 / 9 } } bg={ { extraSmall: "blackBlue", small: "blue", medium: "blue" } } m="x1" py="x3" px="x4">3</Box>\n</Flex>'
            )
          ),
          n.a.createElement(
            c.a,
            null,
            n.a.createElement(m.T, null, "2-Column Layout Example"),
            n.a.createElement(
              c.c,
              { mb: "x2", color: "darkGrey" },
              "Typical 2-column layout structure with a sidebar or a pannel."
            ),
            n.a.createElement(
              m.u,
              {
                height: "400px",
                flexDirection: {
                  extraSmall: "column",
                  small: "row",
                  medium: "row"
                }
              },
              n.a.createElement(
                m.u,
                {
                  bg: "whiteGrey",
                  justifyContent: "center",
                  alignItems: "center",
                  p: "x3",
                  width: { extraSmall: 1, small: 2 / 3, medium: 0.5 },
                  height: { extraSmall: "200px", small: "auto", medium: "auto" }
                },
                n.a.createElement(c.c, { mb: 0 }, "Main content")
              ),
              n.a.createElement(
                m.u,
                {
                  bg: "lightGrey",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: "x3",
                  width: { extraSmall: 1, small: 1 / 3, medium: 0.5 },
                  height: { extraSmall: "200px", small: "auto", medium: "auto" }
                },
                n.a.createElement(c.c, { mb: 0 }, "Sidebar content")
              )
            ),
            n.a.createElement(
              o.a,
              null,
              '<Flex height="400px" flexDirection={ { extraSmall: "column", small: "row", medium: "row" } }>\n  <Flex bg="whiteGrey" justifyContent="center" alignItems="center" p="x3" width={ { extraSmall: 1, small: 2 / 3, medium: 1 / 2 } } height={ { extraSmall: "200px", small: "auto", medium: "auto" } }>\n    <Text mb={ 0 }>Main content</Text>\n  </Flex>\n  <Flex bg="lightGrey" flexDirection="column" justifyContent="center" alignItems="center" p="x3" width={ { extraSmall: 1, small: 1 / 3, medium: 1 / 2 } } height={ { extraSmall: "200px", small: "auto", medium: "auto" } }>\n    <Text mb={ 0 }>Sidebar content</Text>\n  </Flex>\n</Flex>'
            )
          ),
          n.a.createElement(
            c.a,
            null,
            n.a.createElement(m.T, null, "IE11 and Flexbox"),
            n.a.createElement(
              c.c,
              null,
              "To make Flexbox work properly in IE11 additional work may be required. Listed below are the issues that have been discovered and their potential solutions. If you are lucky enough to run into an issue that hasn't been recorded, please let us now in",
              " ",
              n.a.createElement(
                m.E,
                { href: "https://nu.slack.com/messages/CBAFQ4X7X" },
                "#design-system"
              ),
              " ",
              "Slack channel."
            ),
            n.a.createElement(m.X, null, "Using minHeight"),
            n.a.createElement(
              c.c,
              null,
              "Setting minHeight on a flex container does not apply to its flex items. There are 2 ways to resolve this issue:"
            ),
            n.a.createElement(
              m.F,
              { mb: "x3" },
              n.a.createElement(
                m.G,
                null,
                "Substituting minHeight with height",
                " ",
                n.a.createElement(
                  m.E,
                  { href: "".concat(i.a, "flex--ie11-minheight-solution-1") },
                  "(Example)"
                )
              ),
              n.a.createElement(
                m.G,
                null,
                "Wrapping flex container with another flex container",
                " ",
                n.a.createElement(
                  m.E,
                  { href: "".concat(i.a, "flex--ie11-minheight-solution-2") },
                  "(Example)"
                )
              )
            ),
            n.a.createElement(
              c.c,
              null,
              "Please refer",
              " ",
              n.a.createElement(
                m.E,
                { href: "https://github.com/philipwalton/flexbugs#flexbug-3" },
                "here"
              ),
              " ",
              "for a detailed description of the bug and available solutions."
            )
          ),
          n.a.createElement(
            c.a,
            null,
            n.a.createElement(m.T, null, "Related components"),
            n.a.createElement(
              m.F,
              null,
              n.a.createElement(
                m.G,
                null,
                n.a.createElement(m.E, { href: "/components/box" }, "Box")
              ),
              n.a.createElement(
                m.G,
                null,
                n.a.createElement(m.E, { href: "/components/flex" }, "Flex")
              )
            )
          )
        );
      };
    },
    ttvI: function(e, l, t) {
      "use strict";
      t.d(l, "c", function() {
        return a;
      }),
        t.d(l, "a", function() {
          return n;
        }),
        t.d(l, "b", function() {
          return r;
        });
      var a = "https://storybook.nulogy.design/?path=/story/",
        n = "".concat(a, "components-"),
        r = "".concat(a, "pages-");
    }
  }
]);
//# sourceMappingURL=component---src-pages-guides-layout-js-1f886fbcee9172e72fca.js.map
