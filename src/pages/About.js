import './About.css';
import Card from './card.js';

const About = () => {
  const features = [
    {
      title: 'Page Creation',
      description: 'Home, About, Users, User Details, Contact, 404.',
    },
    {
      title: 'Using React Router',
      description: 'Navigation between pages using React Router.',
    },
    {
      title: 'Working with API',
      description: 'Fetching user data through an API.',
    },
    {
      title: 'State Management',
      description: 'Using `useState`, `useEffect`, and `useReducer` hooks.',
    },
    {
      title: 'Error Handling',
      description: 'Creating a 404 page to handle non-existent routes.',
    },
    {
      title: 'Styling and Responsive Design',
      description: 'Applying styles and responsive design to enhance user experience.',
    },
  ];

  return (
    <div className="about">
      
      <div className="text-section">
        <h1>About React Router</h1>
        <p>
          This project is dedicated to learning React Router, navigation, and state management using hooks.
          We are building a multi-page application that includes a home page, an about page,
          a user list, user details, and a contact form.
        </p>
      </div>

      
      <div className="features-section">
        <h2>Project Features</h2>
        <div className="cards-container">
          {features.map((feature, index) => (
            <Card key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;