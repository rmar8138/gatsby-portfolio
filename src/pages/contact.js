import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "./../components/Layout"
import Container from "./../components/styles/Container"

const Contact = styled.section`
  text-align: center;
  margin-bottom: 6rem;
  margin-top: 30vh;
  text-align: left;

  h3 {
    font-size: ${({ theme }) => theme.fsLarge};
    margin-bottom: 30vh;
    font-weight: 300;
    margin-bottom: 4rem;

    @media screen and (min-width: ${({ theme }) => theme.bpLarge}) {
      font-size: ${({ theme }) => theme.fsXlarge};
      margin-top: -10rem;
    }
  }

  p {
    margin-bottom: 2rem;
  }

  span {
    display: block;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .email {
    display: inline-block;
    color: ${({ theme }) => theme.black};
    font-size: ${({ theme }) => theme.fsMedium};
    margin-bottom: 4rem;
  }
`

const SocialList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`

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
    <Layout>
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
    </Layout>
  )
}

export default ContactPage
