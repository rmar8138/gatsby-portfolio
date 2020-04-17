import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StyledFooter, Logo, Contact, Social } from "./styles"

const Footer = React.forwardRef((props, ref) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socials {
            name
            link
            icon
          }
        }
      }
    }
  `)
  const socials = data.site.siteMetadata.socials

  return (
    <StyledFooter ref={ref}>
      <Logo>
        <Link to="/">RM</Link>
      </Logo>
      <Contact>
        <h5>Email</h5>
        <a href="mailto:ragan.martinez@live.com">ragan.martinez@live.com</a>
      </Contact>
      <Social>
        {socials.map(social => (
          <li key={social.link}>
            <a target="_blank" rel="noopener noreferrer" href={social.link}>
              <img src={social.icon} alt={social.name} />
            </a>
          </li>
        ))}
      </Social>
      <span>Copyright &copy; {new Date().getFullYear()}</span>
    </StyledFooter>
  )
})

export default Footer
