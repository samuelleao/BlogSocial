import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import Card from '../components/blog/card'

import Head from 'next/head'

const Home = () => {
  return (
    <div id="index">
      <Head>
        <title>Samuel Leão</title>
        <meta property='og:title' content='Minha pequena contribuição para a sociedade' />
        <meta property='og:image' content={'../images/pages/index/bgIndex.png'} />
        <meta property='og:image:secure_url' content={'../images/pages/index/bgIndex.png'} />
        <meta property='og:image:width' content='600' />
        <meta property='og:type' content='article' />
        <meta property='article:author' content='Samuel Leão' />
        <meta property='article:tag' content='Minha pequena contribuição para a sociedade' />
        <meta property='article:description' content='Tenho como objetivo retornar a sociedade que paga meu curso, meus estudos na área de ciências sociais, ensaios e curiosidades' />
        <meta property='og:description' content='Tenho como objetivo retornar a sociedade que paga meu curso, meus estudos na área de ciências sociais, ensaios e curiosidades' />
      </Head>
      <section className="section1">
        <Container>
          <Row>
            <Col lg={6} md={12} xs={12} >
              <h1 className='color-white'>Minha pequena contribuição para a sociedade</h1>
              <p className='color-white'>Tenho como objetivo retornar a sociedade que paga meu curso,
              meus estudos na área de ciências sociais, ensaios e curiosidades
              <br /><br />
              Espero que gostem!</p>
              <div className='d-flex'>
                <img src={require('../images/pages/index/authorMain.png')} alt='SamuelLeão' />
                <span className='color-white mt-1 ml-1'>Samuel Leão</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='section2'>
        <Container>
          <Row>
            <Col lg={2} md={12} xs={12}>
              <ul className='blog-category'>
                <li><a href='' className='active'>Tudo</a></li>
                <li><a href=''>Ciência Política</a></li>
                <li><a href=''>Ensaios</a></li>
                <li><a href=''>Antropologia</a></li>
                <li><a href=''>Filosofia</a></li>
                <li><a href=''>Livros</a></li>
                <li><a href=''>Noticias</a></li>
                <li><a href=''>Novidades</a></li>
                <li><a href=''>Curiosidades</a></li>
              </ul>
            </Col>
            <Col lg={10} md={12} xs={12}>
              <div className='posts-area'>
                <Card
                  img={require('../images/blog/1.png')}
                  title='Jean-Jacques-Rousseau, quem foi?'
                  description='Sua filosofia política de fato influenciou o 
                  Iluminismo por toda a Europa, assim como 
                  também aspectos da Revolução Francesa.'
                  category='Sociologia'
                />

                <Card
                  img={require('../images/blog/2.png')}
                  title='Em sua obra “A grande Transformação: as origens de nossa época” 
                  publicado originalmente em 1940, Karl Polanyi elabora críticas com 
                  sua visão antropologizada da economia.'
                  category='Ciência Política'
                />

                <Card
                  img={require('../images/blog/3.png')}
                  title='Sociologia e sua consolidação como ciência'
                  description='Diante de um cenário de economia e educação 
                  neoliberal, pode-se inferir que dentro do campo das ciências 
                  das humanidades, a sociologia possui uma valorização menor 
                  que as demais.'
                  category='Ensaio'
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}


export default Home