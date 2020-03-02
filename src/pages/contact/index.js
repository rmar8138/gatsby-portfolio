import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Container from "./../../components/container"
import { Contact, SocialList } from "./_styles"

const ContactPage = () => {
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
    <Contact>
      <Container>
        <h3>Contact</h3>
        <p>For any enquiries, please feel free to get in touch with me.</p>
        <span>Email</span>
        <a className="email" href="mailto:ragan.martinez@live.com">
          ragan.martinez@live.com
        </a>
        <span>Social</span>
        <SocialList>
          {socials.map(social => (
            <li key={social.link}>
              <a target="_blank" href={social.link}>
                <img src={social.icon} alt={social.name} />
              </a>
            </li>
          ))}
        </SocialList>
      </Container>
    </Contact>
  )
}

export default ContactPage
