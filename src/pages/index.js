// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="row">
        <div className="col-5">
        <div className="container">
          <h1 id="Behandlung">Behandlung</h1>
          <p>Fuß- und Handpflege in den folgenden Bereichen:
          <br></br>
          Med. Fußpflege, Maniküre, Pediküre, Shellac und Paraffinbad.
          </p>
          <p>Für die Behandlungen nutze ich die Produktpalette von Gehwol oder alternativ rein vegane Bio-Produkte, die Sie ebenfalls im Geschäft käuflich erwerben können.</p>

          <p>Selbstverständlich können Sie persönliche Wünsche äußern. Gerne gestalten wir die Behandlungen auch nach Ihren eigenen Vorstellungen.</p>
        </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <div className="container">
          <h1 id="Leistungen">Leistungen</h1>
          <table>
            <tbody>

            <tr>
              <th>Leistung</th>
              <th>Preis</th>
            </tr>

            <tr>
              <td>Med. Fußpflege</td>
              <td>30€</td>
            </tr>
            <tr>
              <td>Med. Fußpflege mit Lack</td>
              <td>ab 35€</td>
            </tr>
            <tr>
              <td>Maniküre</td>
              <td>30€</td>
            </tr>
            <tr>
              <td>Maniküre mit French Lack	</td>
              <td>35€</td>
            </tr>
            <tr>
              <td>Pediküre mit French Lack</td>
              <td>40€</td>
            </tr>
            <tr>
              <td>French Lack (Hände & Füße)</td>
              <td>25€</td>
            </tr>
            <tr>
              <td>Lack (Hände & Füße)</td>
              <td>20€</td>
            </tr>
            <tr>
              <td>Maniküre & Pediküre</td>
              <td>ab 55€</td>
            </tr>
            <tr>
              <td>Shellac</td>
              <td>30€</td>
            </tr>
            <tr>
              <td>Shellac & Maniküre</td>
              <td>50€</td>
            </tr>
            <tr>
              <td>Paraffinbad</td>
              <td>20€</td>
            </tr>
            </tbody>

          </table>

          </div>
          
        </div>

      </div>
      <div className='row'>
        <div className='container'> <h1 id="Ubermich"> Über mich </h1></div>
      </div>
      <div className='row'>
        <div className='col-3'>
          <div className='container'
          style={{marginTop: `15px`}}
          > 
            <StaticImage
            alt="Iara"
            src="../images/iara-langlich.png"
            />
          </div> 
        </div>
        <div className='col-7'>
          <div className='container'>
            <p>Liebe KundInnen von Bella Kosmetik,</p>

            <p>ich bin Iara Alcobio, die Inhaberin von Bella Kosmetik und geprüft in den Bereichen der medizinischen Fußpflege sowie der Maniküre und Pediküre.</p>

            <p>Seit 2011 arbeite ich als Fuß- und Handpflegerin. Dabei sammelte ich meine ersten Erfahrungen in der mobilen Betreuung meiner KundInnen und bin seit 2016 stolze Besitzerin meines eigenen Salons in der Bremer Neustadt.</p>
            
            <p>Ich freue mich Sie bei mir willkommen zu heißen!</p>
            <p>Ihre Iara Alcobio</p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <div className='container'>
            <h1 id="Offnungszeiten">Öffnungszeiten</h1>
            <div className='row'>
              <div className='col-5'>
                <p><strong>Dienstag bis Freitag</strong> <br></br>
                10:00 bis 13:00 Uhr <br></br>
                14:00 bis 18:00 Uhr 
                </p>
              </div>
              <div className='col-5'>
                <p><strong>Samstag</strong> <br></br>
                10:00 bis 13:00 Uhr
                </p>
              </div>
            </div>

          </div>
        </div>
        <div className='col-6'>
          <div className='container'>
            <h1 id="Kontakt">Kontakt</h1>
            <div className='row'>
              <div className='col-5'>
                <p>Bella Kosmetik<br></br>
                Kornstraße 116 <br></br>
                28201 Bremen 
                </p>
              </div>
              <div className='col-7'>
                <p>Tel: 0421 51700573 <br></br>
                Mobil: 0179 6742760<br></br>
                Mail: iaraalcobio@{/*Kommentar  */}hotmail.de
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export const Head = () => <title>Bella Kosmetik</title>

// Step 3: Export your component
export default IndexPage