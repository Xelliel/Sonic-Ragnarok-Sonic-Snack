import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import React from 'react';
import './Cards.css';


function Cards() {
  return (
    <CardGroup class="CardGroup">
      <Card class="Card">
        <Card.Img variant="top" src="https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="popcorn" height="200px" />
        <Card.Body>
          <Card.Title>Pop Corn</Card.Title>
          <Card.Text>
           Get your Fresh pop corn at this location.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card class="Card">
        <Card.Img variant="top" src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="pizza" height="200px"/>
        <Card.Body>
          <Card.Title>Pizza</Card.Title>
          <Card.Text>
           Yummy pizza.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card class="Card">
        <Card.Img variant="top" src="https://images.pexels.com/photos/9304021/pexels-photo-9304021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="hotdog" height="200px" />
        <Card.Body>
          <Card.Title>Hot Dogs</Card.Title>
          <Card.Text>
           Hot dogs,chilli dogs so good.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card class="Card">
        <Card.Img variant="top" src="https://target.scene7.com/is/image/Target/GUEST_21215cb6-b2e1-4b1c-a01e-b4ec704a946d?wid=488&hei=488&fmt=pjpeg" alt="sourpatchkids" height="200px" />
        <Card.Body>
          <Card.Title>Sour Patch Kids</Card.Title>
          <Card.Text>
           candies!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card class="Card">
        <Card.Img variant="top" src="https://i.ebayimg.com/00/s/MTUwMFgxMjE0/z/ZogAAOSw8zZg413v/$_57.PNG?set_id=8800005007" alt="Cheetos" height="200px" />
        <Card.Body>
          <Card.Title>Cheetos</Card.Title>
          <Card.Text>
            Crunchy,Flamin hot,cheddar Jalapeno,puffs you name it!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card class="Card">
             <Card.Img variant="top" src="https://thecozycook.com/wp-content/uploads/2020/07/Onion-Rings-Recipe-f.jpg" alt="Cheetos" height="200px" />
             <Card.Body>
               <Card.Title>Onion Rings</Card.Title>
               <Card.Text>
                 Fresh Onion Rings!
               </Card.Text>
             </Card.Body>
             <Card.Footer>
               <small className="text-muted">Last updated 3 mins ago</small>
             </Card.Footer>
           </Card>
    </CardGroup>
  );
}

export default Cards;