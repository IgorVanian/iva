import assets from './assets'
import './TechStack.css'

const techStack = [{
  categoryName: "Developpement",
  items: [{
    text: "As a React-Native developper at my current job, I hopped into ReactJS and it became my favorite tool in the toolbox for building web UIs. This site is using 'create-react-app' which gets the job done pretty well for the use case.",
    img: assets.react,
    imgAlt: "ReactJS"
  }, {
    text: "Having experience with a proprietary map provider like Google, I wanted to try Leaflet as an free open-source alternative to see how fast I could get a map component working and how far I could go before my first API limitation.",
    img: assets.leaflet,
    imgAlt: "Leaflet"
  }]
}, {
  categoryName: "CI/CD",
  items: [{
    text: "Using AWS daily at my current job, it provides solid back-end services for the company needs and I'm also using it for my projects with a free/low usage cost (S3 storage, Route 53, CloudFront...).",
    img: assets.aws,
    imgAlt: "Amazon Web Services"
  }, {
    text: "CI/CD tool I chose for this project. It was very straightforward and took me very little time to get it working. It's now configured to test, build and push generated statics to AWS S3.",
    img: assets.circleci,
    imgAlt: "CircleCI"
  }]
}];

const TechStack = () => {

  function getTechStack(techStack) {
    return techStack.map(stack => {
      const stackItems = stack.items.map(TechStackCategoryItem);
      return <TechStackCategory stack={stack} items={stackItems} />;
    })
  }

  return (
    <div className="tech-stack">
      {getTechStack(techStack)}
    </div>
  )
}

const TechStackCategory = ({ stack, items }) => {
  return (
    <div className="tech-stack-category">
      <h2>{stack.categoryName}</h2>
      {items}
    </div>
  )
}

const TechStackCategoryItem = ({ text, img, imgAlt }) => {
  return (
    <div className="tech-stack-element">
      <div className="tech-stack-element-left-image">
        <img src={img} alt={imgAlt} />
      </div>
      <p>
        {text}
      </p>
    </div>
  )
}

export default TechStack;
