export interface Insight {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  date: string;
  content: string;
}

export const insights: Insight[] = [
  {
    id: 1,
    category: 'Health Care',
    title: 'The Future of Value-Based Care',
    excerpt: 'How leading healthcare providers are transforming care delivery models to improve outcomes and reduce costs.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    readTime: '5 min read',
    date: 'Dec 15, 2024',
    content: `
      <p>The healthcare industry is undergoing a fundamental transformation as providers shift from volume-based to value-based care models. This paradigm shift represents more than just a change in reimbursement structures—it's a complete reimagining of how healthcare is delivered, measured, and optimized.</p>
      
      <h3>The Value-Based Care Imperative</h3>
      <p>Value-based care models prioritize patient outcomes over the quantity of services provided. This approach aligns provider incentives with patient health, creating a system where success is measured by the quality and efficiency of care rather than the number of procedures performed.</p>
      
      <h3>Key Implementation Strategies</h3>
      <p>Successful value-based care implementation requires a multi-faceted approach:</p>
      <ul>
        <li><strong>Data Integration:</strong> Comprehensive patient data aggregation from multiple sources</li>
        <li><strong>Care Coordination:</strong> Seamless communication between care teams</li>
        <li><strong>Outcome Measurement:</strong> Robust metrics for tracking patient health improvements</li>
        <li><strong>Technology Adoption:</strong> Digital tools that support care delivery and patient engagement</li>
      </ul>
      
      <h3>Challenges and Opportunities</h3>
      <p>While the transition to value-based care presents significant challenges, including data interoperability issues and provider resistance, it also offers unprecedented opportunities for improving patient outcomes while reducing healthcare costs.</p>
      
      <h3>Looking Ahead</h3>
      <p>As healthcare organizations continue to embrace value-based care models, we expect to see increased focus on preventive care, patient engagement technologies, and innovative care delivery methods that prioritize both clinical outcomes and patient satisfaction.</p>
    `
  },
  {
    id: 2,
    category: 'Financials',
    title: 'Digital Banking Transformation',
    excerpt: 'Key strategies for traditional banks to compete effectively in the digital-first banking landscape.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&q=80',
    readTime: '7 min read',
    date: 'Dec 12, 2024',
    content: `
      <p>The financial services industry is experiencing unprecedented disruption as digital-native competitors challenge traditional banking models. Banks must transform their operations, technology infrastructure, and customer experience to remain competitive in an increasingly digital world.</p>
      
      <h3>The Digital Imperative</h3>
      <p>Digital transformation in banking goes beyond simply offering online services. It requires a fundamental reimagining of how financial institutions operate, interact with customers, and deliver value in a technology-driven economy.</p>
      
      <h3>Core Transformation Areas</h3>
      <p>Successful digital banking transformation encompasses several critical areas:</p>
      <ul>
        <li><strong>Customer Experience:</strong> Seamless, personalized digital interactions</li>
        <li><strong>Core Systems:</strong> Modern, flexible technology infrastructure</li>
        <li><strong>Data Analytics:</strong> Leveraging customer data for insights and personalization</li>
        <li><strong>Security:</strong> Robust cybersecurity and fraud prevention measures</li>
      </ul>
      
      <h3>Implementation Challenges</h3>
      <p>Banks face significant challenges in their digital transformation journey, including legacy system integration, regulatory compliance, and cultural change management.</p>
      
      <h3>Future Outlook</h3>
      <p>The future of banking lies in creating truly digital-first experiences that combine the trust and stability of traditional banking with the innovation and agility of fintech companies.</p>
    `
  },
  {
    id: 3,
    category: 'Utilities',
    title: 'Accelerating the Energy Transition',
    excerpt: 'How utilities are balancing grid reliability, affordability, and sustainability in the shift to clean energy.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80',
    readTime: '6 min read',
    date: 'Dec 10, 2024',
    content: `
      <p>The energy sector is at a critical inflection point as utilities worldwide work to accelerate the transition to clean energy while maintaining grid reliability and affordability. This complex transformation requires balancing multiple competing priorities and stakeholder interests.</p>
      
      <h3>The Energy Transition Challenge</h3>
      <p>Utilities must navigate the transition from fossil fuels to renewable energy sources while ensuring grid stability, managing costs, and meeting increasing energy demand from electrification trends.</p>
      
      <h3>Key Strategic Priorities</h3>
      <p>Successful energy transition strategies focus on several critical areas:</p>
      <ul>
        <li><strong>Grid Modernization:</strong> Upgrading infrastructure for renewable integration</li>
        <li><strong>Energy Storage:</strong> Implementing battery and other storage technologies</li>
        <li><strong>Smart Grid:</strong> Deploying advanced metering and grid management systems</li>
        <li><strong>Customer Programs:</strong> Engaging customers in energy efficiency and demand response</li>
      </ul>
      
      <h3>Balancing Act</h3>
      <p>Utilities must carefully balance reliability, affordability, and sustainability while managing regulatory requirements and stakeholder expectations.</p>
      
      <h3>Path Forward</h3>
      <p>The successful energy transition requires collaboration between utilities, regulators, technology providers, and customers to create a sustainable, reliable, and affordable energy future.</p>
    `
  },
  {
    id: 4,
    category: 'Industrials',
    title: 'Industry 4.0 Implementation Guide',
    excerpt: 'A comprehensive roadmap for manufacturers looking to adopt smart manufacturing technologies.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80',
    readTime: '8 min read',
    date: 'Dec 8, 2024',
    content: `
      <p>Industry 4.0 represents the fourth industrial revolution, characterized by the integration of digital technologies into manufacturing processes. This transformation enables manufacturers to create smart factories that are more efficient, flexible, and responsive to market demands.</p>
      
      <h3>Understanding Industry 4.0</h3>
      <p>Industry 4.0 encompasses the convergence of physical and digital systems, creating cyber-physical systems that can communicate, analyze, and act on information to drive intelligent manufacturing processes.</p>
      
      <h3>Core Technologies</h3>
      <p>Successful Industry 4.0 implementation relies on several key technologies:</p>
      <ul>
        <li><strong>Internet of Things (IoT):</strong> Connected sensors and devices throughout the factory</li>
        <li><strong>Artificial Intelligence:</strong> Machine learning for predictive maintenance and optimization</li>
        <li><strong>Robotics:</strong> Advanced automation and collaborative robots</li>
        <li><strong>Digital Twins:</strong> Virtual representations of physical systems</li>
      </ul>
      
      <h3>Implementation Roadmap</h3>
      <p>Manufacturers should approach Industry 4.0 implementation as a strategic transformation, starting with pilot projects and gradually scaling successful initiatives across the organization.</p>
      
      <h3>Expected Benefits</h3>
      <p>Industry 4.0 adoption delivers significant benefits including improved efficiency, reduced costs, enhanced quality, and increased flexibility to respond to changing market conditions.</p>
    `
  },
  {
    id: 5,
    category: 'Information Technology',
    title: 'AI Integration in Enterprise Systems',
    excerpt: 'Best practices for implementing artificial intelligence across enterprise technology stacks.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
    readTime: '9 min read',
    date: 'Dec 5, 2024',
    content: `
      <p>Artificial Intelligence is transforming enterprise operations across industries, offering unprecedented opportunities for automation, optimization, and innovation. However, successful AI integration requires careful planning, strategic implementation, and ongoing management.</p>
      
      <h3>The AI Integration Challenge</h3>
      <p>Integrating AI into existing enterprise systems presents unique challenges including data quality, system compatibility, change management, and ensuring AI solutions align with business objectives.</p>
      
      <h3>Strategic Implementation Framework</h3>
      <p>Successful AI integration follows a structured approach:</p>
      <ul>
        <li><strong>Data Foundation:</strong> Ensuring high-quality, accessible data</li>
        <li><strong>Technology Infrastructure:</strong> Scalable platforms and tools</li>
        <li><strong>Use Case Selection:</strong> Starting with high-impact, low-risk applications</li>
        <li><strong>Change Management:</strong> Training and supporting employees through the transition</li>
      </ul>
      
      <h3>Common Pitfalls</h3>
      <p>Organizations often struggle with unrealistic expectations, insufficient data preparation, and lack of clear success metrics when implementing AI solutions.</p>
      
      <h3>Future Considerations</h3>
      <p>As AI technology continues to evolve, enterprises must remain agile and adaptable, continuously updating their AI strategies to leverage new capabilities and maintain competitive advantage.</p>
    `
  },
  {
    id: 6,
    category: 'Consumer Discretionary',
    title: 'Omnichannel Customer Experience',
    excerpt: 'Building seamless customer journeys across physical and digital touchpoints.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
    readTime: '6 min read',
    date: 'Dec 3, 2024',
    content: `
      <p>In today's retail landscape, customers expect seamless experiences across all channels—whether shopping online, in-store, or through mobile apps. Omnichannel retail strategies are essential for meeting these expectations and driving customer loyalty.</p>
      
      <h3>The Omnichannel Imperative</h3>
      <p>Modern consumers don't distinguish between channels; they expect consistent, personalized experiences regardless of how they interact with a brand. This requires retailers to break down silos and create unified customer experiences.</p>
      
      <h3>Key Components</h3>
      <p>Successful omnichannel strategies integrate several critical elements:</p>
      <ul>
        <li><strong>Unified Customer Data:</strong> Single view of customer across all touchpoints</li>
        <li><strong>Consistent Brand Experience:</strong> Cohesive messaging and design across channels</li>
        <li><strong>Seamless Transactions:</strong> Buy anywhere, fulfill anywhere capabilities</li>
        <li><strong>Personalization:</strong> Tailored experiences based on customer preferences and behavior</li>
      </ul>
      
      <h3>Implementation Challenges</h3>
      <p>Retailers face significant challenges in implementing omnichannel strategies, including technology integration, organizational alignment, and maintaining consistency across diverse touchpoints.</p>
      
      <h3>Measuring Success</h3>
      <p>Effective omnichannel strategies require comprehensive metrics that capture customer satisfaction, engagement, and business impact across all channels.</p>
    `
  },
  {
    id: 7,
    category: 'Health Care',
    title: 'Telemedicine Best Practices',
    excerpt: 'Optimizing virtual care delivery for improved patient satisfaction and clinical outcomes.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&q=80',
    readTime: '5 min read',
    date: 'Nov 30, 2024',
    content: `
      <p>Telemedicine has emerged as a critical component of modern healthcare delivery, offering patients convenient access to care while enabling providers to reach broader populations. Implementing effective telemedicine programs requires careful planning and adherence to best practices.</p>
      
      <h3>The Telemedicine Revolution</h3>
      <p>The rapid adoption of telemedicine has transformed how healthcare is delivered, making quality care accessible to patients regardless of their location or mobility constraints.</p>
      
      <h3>Essential Best Practices</h3>
      <p>Successful telemedicine implementation requires attention to several key areas:</p>
      <ul>
        <li><strong>Technology Infrastructure:</strong> Reliable platforms and secure communication tools</li>
        <li><strong>Provider Training:</strong> Comprehensive education on virtual care delivery</li>
        <li><strong>Patient Education:</strong> Clear guidance on using telemedicine services</li>
        <li><strong>Quality Assurance:</strong> Monitoring and improving virtual care outcomes</li>
      </ul>
      
      <h3>Regulatory Considerations</h3>
      <p>Healthcare organizations must navigate complex regulatory requirements including licensure, privacy, and reimbursement policies when implementing telemedicine programs.</p>
      
      <h3>Future Opportunities</h3>
      <p>As telemedicine technology continues to evolve, healthcare providers have opportunities to expand services, improve patient outcomes, and reduce healthcare costs through innovative virtual care models.</p>
    `
  },
  {
    id: 8,
    category: 'Financials',
    title: 'RegTech Solutions for Compliance',
    excerpt: 'Leveraging regulatory technology to streamline compliance processes and reduce operational risk.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    readTime: '7 min read',
    date: 'Nov 28, 2024',
    content: `
      <p>Regulatory Technology (RegTech) is revolutionizing how financial institutions manage compliance, offering automated solutions that reduce costs, improve accuracy, and enhance regulatory reporting capabilities.</p>
      
      <h3>The RegTech Advantage</h3>
      <p>RegTech solutions enable financial institutions to navigate increasingly complex regulatory environments while maintaining operational efficiency and reducing compliance-related risks.</p>
      
      <h3>Key RegTech Applications</h3>
      <p>Financial institutions are leveraging RegTech across multiple compliance areas:</p>
      <ul>
        <li><strong>Anti-Money Laundering (AML):</strong> Automated transaction monitoring and suspicious activity detection</li>
        <li><strong>Know Your Customer (KYC):</strong> Streamlined customer onboarding and verification processes</li>
        <li><strong>Regulatory Reporting:</strong> Automated data collection and report generation</li>
        <li><strong>Risk Management:</strong> Real-time monitoring and risk assessment tools</li>
      </ul>
      
      <h3>Implementation Strategies</h3>
      <p>Successful RegTech adoption requires careful vendor selection, integration planning, and change management to ensure seamless implementation and user adoption.</p>
      
      <h3>Future Trends</h3>
      <p>Emerging technologies including artificial intelligence, machine learning, and blockchain are expected to further enhance RegTech capabilities and drive innovation in compliance management.</p>
    `
  },
  {
    id: 9,
    category: 'Utilities',
    title: 'Smart Grid Cybersecurity',
    excerpt: 'Protecting critical infrastructure from evolving cyber threats in the digital grid era.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    readTime: '6 min read',
    date: 'Nov 25, 2024',
    content: `
      <p>As utilities modernize their grids with smart technologies, cybersecurity has become a critical concern. Protecting critical infrastructure from cyber threats requires comprehensive security strategies and ongoing vigilance.</p>
      
      <h3>The Cybersecurity Challenge</h3>
      <p>Smart grid technologies introduce new attack vectors while utilities face increasing cyber threats from nation-states, criminal organizations, and other malicious actors.</p>
      
      <h3>Essential Security Measures</h3>
      <p>Utilities must implement comprehensive cybersecurity programs including:</p>
      <ul>
        <li><strong>Network Segmentation:</strong> Isolating critical systems from less secure networks</li>
        <li><strong>Access Controls:</strong> Implementing strong authentication and authorization mechanisms</li>
        <li><strong>Monitoring Systems:</strong> Deploying security information and event management (SIEM) tools</li>
        <li><strong>Incident Response:</strong> Developing and testing cyber incident response plans</li>
      </ul>
      
      <h3>Regulatory Requirements</h3>
      <p>Utilities must comply with evolving cybersecurity regulations and standards while maintaining grid reliability and customer service.</p>
      
      <h3>Building Resilience</h3>
      <p>Creating cyber-resilient smart grids requires ongoing investment in security technologies, staff training, and collaboration with government agencies and industry partners.</p>
    `
  },
  {
    id: 10,
    category: 'Industrials',
    title: 'Supply Chain Resilience Strategies',
    excerpt: 'Building robust supply chains that can adapt to global disruptions and market volatility.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
    readTime: '8 min read',
    date: 'Nov 22, 2024',
    content: `
      <p>Global supply chains face unprecedented challenges from disruptions, geopolitical tensions, and market volatility. Building resilient supply chains requires strategic planning and proactive risk management.</p>
      
      <h3>The Resilience Imperative</h3>
      <p>Supply chain resilience has become a strategic priority as organizations recognize the critical importance of maintaining operations during disruptions and market volatility.</p>
      
      <h3>Key Resilience Strategies</h3>
      <p>Manufacturers are implementing various strategies to enhance supply chain resilience:</p>
      <ul>
        <li><strong>Supplier Diversification:</strong> Reducing dependence on single suppliers or regions</li>
        <li><strong>Inventory Optimization:</strong> Balancing cost efficiency with buffer stock requirements</li>
        <li><strong>Digital Technologies:</strong> Leveraging AI and analytics for better visibility and forecasting</li>
        <li><strong>Strategic Partnerships:</strong> Building collaborative relationships with key suppliers</li>
      </ul>
      
      <h3>Risk Assessment</h3>
      <p>Effective supply chain resilience requires comprehensive risk assessment including geopolitical, environmental, and operational risk factors.</p>
      
      <h3>Future Considerations</h3>
      <p>As supply chains continue to evolve, manufacturers must remain agile and adaptable, continuously updating their resilience strategies to address emerging challenges and opportunities.</p>
    `
  },
  {
    id: 11,
    category: 'Information Technology',
    title: 'Cloud Migration Best Practices',
    excerpt: 'A strategic approach to moving enterprise workloads to the cloud while minimizing risk.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
    readTime: '9 min read',
    date: 'Nov 20, 2024',
    content: `
      <p>Cloud migration has become a strategic imperative for organizations seeking to modernize their IT infrastructure, improve scalability, and reduce costs. However, successful cloud migration requires careful planning and execution.</p>
      
      <h3>The Cloud Migration Journey</h3>
      <p>Moving enterprise workloads to the cloud is a complex transformation that requires strategic planning, technical expertise, and change management capabilities.</p>
      
      <h3>Migration Best Practices</h3>
      <p>Successful cloud migration follows proven methodologies:</p>
      <ul>
        <li><strong>Assessment and Planning:</strong> Comprehensive evaluation of current infrastructure and workloads</li>
        <li><strong>Migration Strategy:</strong> Choosing appropriate migration approaches (lift-and-shift, refactor, rearchitect)</li>
        <li><strong>Security and Compliance:</strong> Ensuring data protection and regulatory compliance</li>
        <li><strong>Testing and Validation:</strong> Thorough testing of migrated applications and systems</li>
      </ul>
      
      <h3>Common Challenges</h3>
      <p>Organizations often face challenges including data security concerns, application compatibility issues, and staff training requirements during cloud migration projects.</p>
      
      <h3>Maximizing Benefits</h3>
      <p>To fully realize cloud benefits, organizations should focus on optimizing costs, improving security posture, and leveraging cloud-native services and capabilities.</p>
    `
  },
  {
    id: 12,
    category: 'Consumer Discretionary',
    title: 'Personalization at Scale',
    excerpt: 'Using data analytics and AI to deliver personalized experiences across all customer touchpoints.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    readTime: '6 min read',
    date: 'Nov 18, 2024',
    content: `
      <p>Personalization has become a key differentiator in retail, with customers expecting tailored experiences across all touchpoints. Achieving personalization at scale requires sophisticated data analytics and AI capabilities.</p>
      
      <h3>The Personalization Opportunity</h3>
      <p>Retailers that successfully implement personalization strategies can significantly improve customer engagement, increase conversion rates, and build stronger customer loyalty.</p>
      
      <h3>Key Personalization Technologies</h3>
      <p>Modern personalization relies on several critical technologies:</p>
      <ul>
        <li><strong>Customer Data Platforms:</strong> Unified customer profiles across all touchpoints</li>
        <li><strong>Machine Learning:</strong> AI algorithms for recommendation engines and behavioral analysis</li>
        <li><strong>Real-time Processing:</strong> Instant personalization based on current customer behavior</li>
        <li><strong>Content Management:</strong> Dynamic content delivery based on customer preferences</li>
      </ul>
      
      <h3>Implementation Considerations</h3>
      <p>Successful personalization requires careful attention to data privacy, customer consent, and ethical use of customer information.</p>
      
      <h3>Measuring Success</h3>
      <p>Effective personalization programs require comprehensive metrics including engagement rates, conversion improvements, and customer satisfaction scores to demonstrate ROI and guide optimization efforts.</p>
    `
  }
];

// Page Configuration - Define which insights appear on which pages
export const pageInsights = {
  homepage: [1, 4, 6], // Insight IDs for homepage
  services: [4, 3, 6], // Insight IDs for services page
  industries: [1, 2, 3], // Insight IDs for industries page
};

// Get insights for a specific page
export const getInsightsForPage = (pageName: keyof typeof pageInsights) => {
  const insightIds = pageInsights[pageName] || [];
  return insights.filter(insight => insightIds.includes(insight.id));
};

// Get all insights
export const getAllInsights = () => insights;

// Get insight by ID
export const getInsightById = (id: number) => insights.find(insight => insight.id === id);

// Get insights by category
export const getInsightsByCategory = (category: string) => 
  insights.filter(insight => insight.category === category);

