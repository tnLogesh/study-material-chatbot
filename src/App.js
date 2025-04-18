import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Subject data with placeholders for your Google Drive links
  const materials = {
    "1": {
      "1": {
        "Professional English - I": "https://www.msajce-edu.in/academics/sh/LectureNote/HS3151-LN.pdf",
        "Matrices and Calculus": "https://www.poriyaan.in/paper/matrices-and-calculus-2/",
        "Engineering Physics": "https://www.mbit.edu.in/wp-content/uploads/2020/05/FULLBOOKPHYSICS.pdf",
        "Engineering Chemistry": "https://www.nietanugul.edu.in/files/2nd%20Sem_Engg%20Chem.pdf",
        "Problem Solving and Python Programming": "https://prathyusha.edu.in/wp-content/uploads/2023/11/PYTHON-1.pdf",
        "Heritage of Tamils": "https://www.scribd.com/document/731650112/Book-heritage-of-Tamil-English-Version"
      },
      "2": {
        "Professional English - II": "https://www.poriyaan.in/paper/professional-english-ii-7/",
        "Statistics and Numerical Methods": "https://www.msajce-edu.in/academics/it/2021/LectureNote/MA3251-LN.pdf",
        "Physics for Information Science": "https://www.poriyaan.in/paper/physics-for-information-science-20/",
        "Basic Electrical and Electronics Engineering": "https://sist.sathyabama.ac.in/sist_coursematerial/uploads/SEEA1101.pdf",
        "Engineering Graphics": "https://mrcet.com/downloads/digital_notes/HS/R20/ENGINEERING%20GRAPHICS.pdf",
        "Programming in C": "https://vardhaman.org/wp-content/uploads/2021/03/CP.pdf",
        "Tamils and Technology": "https://www.scribd.com/document/751882411/Book-Tamils-and-Technology-in-Tamil"
      }
    },
    "2": {
      "1": {
        "Discrete Mathematics": "https://discrete.openmathbooks.org/pdfs/dmoi-tablet.pdf",
        "Digital Principles and Computer Organization": "https://www.poriyaan.in/paper/digital-principles-and-computer-organization-73/",
        "Foundations of Data Science": "https://www.poriyaan.in/paper/foundation-of-data-science-74/",
        "Data Structures": "https://www.poriyaan.in/paper/data-structure-75/",
        "Object Oriented Programming": "https://www.poriyaan.in/paper/object-oriented-programming-76/"
      },
      "2": {
        "Theory of Computation": "https://www.poriyaan.in/paper/theory-of-computation-77/",
        "Artificial Intelligence and Machine Learning": "https://www.poriyaan.in/paper/artificial-intelligence-and-machine-learning-78/",
        "Database Management Systems": "https://www.poriyaan.in/paper/database-management-system-79/",
        "Algorithms": "https://www.poriyaan.in/paper/algorithms-80/",
        "Introduction to Operating Systems": "https://www.poriyaan.in/paper/introduction-to-operating-systems-81/",
        "Environmental Science and Sustainability": "https://www.poriyaan.in/paper/environmental-sciences-and-sustainability-29/"
      }
    },
    "3": {
      "1": {
        "Computer Networks": "https://www.poriyaan.in/paper/computer-networks-82/",
        "Compiler Design": "https://www.poriyaan.in/paper/compiler-design-83/",
        "Cryptography and Cyber Security": "https://www.poriyaan.in/paper/cryptography-and-cyber-security-84/",
        "Distributed Computing": "https://www.poriyaan.in/paper/distributed-computing-85/",
        "Software Testing and Automation": "https://annauniversitynotes.com/ccs366-software-testing-and-automation-notes/"
      },
      "2": {
        "Object Oriented Software Engineering": "https://www.poriyaan.in/paper/object-oriented-software-engineering-86/",
        "Renewable Energy Systems": "https://learnengineering.in/ee8703-renewable-energy-systems/",
        "Embeded Systems and IOT": "https://www.poriyaan.in/paper/embedded-systems-and-iot-87/",
        "Network Security": "https://stannescet.ac.in/cms/staff/qbank/CSE/Notes/CCS354-NETWORK%20SECURITY-317734166-network-security-unit-1.pdf",
        "Cloud Computing": "https://stannescet.ac.in/cms/staff/qbank/CSE/Notes/CS8791-CLOUD%20COMPUTING-931237381-CS8791CC.pdf",
        "Digital Marketing": "https://www.stannescet.ac.in/cms/staff/qbank/CSE/Notes/CCW332-DIGITAL%20MARKETING-1233372698-DM%20NOTES%203UNITS%20UPDATED.pdf",
        "Ethics and AI": "https://www.enggtree.com/ccs345-ethics-and-ai-lecture-notes-2021-regulation/"
      }
    },
    "4": {
      "1": {
        "Human Values and Ethics": "https://www.brainkart.com/materials/human-values-and-ethics---ge3791-2066/notes/",
        "summer internship": "PASTE_DRIVE_LINK_HERE"
      },
      "2": {
        "project work / internship": "PASTE_DRIVE_LINK_HERE"
      }
    }
  };

  const handleSubmitFeedback = (feedback) => {
    fetch('https://formsubmit.co/ajax/nclogeshwaran@gmail.com', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        message: feedback,
        _subject: 'New Feedback from Study Portal',
        _replyto: userData?.email || 'no-reply@example.com' // Optional: Include user's email
      })
    })
    .then(response => {
      if (response.ok) {
        alert('Thank you for your feedback! We\'ll review it soon.');
        setShowFeedback(false);
      } else {
        throw new Error('Failed to send feedback');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to send feedback. Please try again later.');
    });
  };

  const UserDetails = ({ onNext }) => {
    const [email, setEmail] = useState('');
    const [regNo, setRegNo] = useState('');
    const [year, setYear] = useState('');
    const [semester, setSemester] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (email && regNo && year && semester) {
        onNext({ email, regNo, year, semester });
      } else {
        alert("Please fill all fields!");
      }
    };
  
    return (
      <div className="user-details">
        <h2>Student Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Register Number:</label>
            <input
              type="text"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Year:</label>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            >
              <option value="">Select Year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </div>
          <div className="form-group">
            <label>Semester:</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              required
            >
              <option value="">Select Semester</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
            </select>
          </div>
          <button type="submit">Continue</button>
        </form>
      </div>
    );
  };

  const SubjectMaterials = ({ year, semester, onFeedback }) => {
    const [selectedSubject, setSelectedSubject] = useState(null);
  
    return (
      <div className="subject-materials">
        <h2>Year {year} - Semester {semester} Subjects</h2>
        <div className="subject-list">
          {Object.entries(materials[year]?.[semester] || {}).map(([subject, link]) => (
            <div key={subject} className="subject-card">
              <button 
                onClick={() => setSelectedSubject(subject === selectedSubject ? null : subject)}
                className="subject-btn"
              >
                {subject}
              </button>
              {selectedSubject === subject && (
                <div className="drive-link">
                  {link.startsWith('http') ? (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      Open Material ↗
                    </a>
                  ) : (
                    <p className="no-link">Material link coming soon</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <button onClick={onFeedback} className="feedback-btn">
          Provide Feedback
        </button>
      </div>
    );
  };

  const FeedbackForm = ({ onSubmit, onCancel }) => {
    const [feedback, setFeedback] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (feedback.trim()) {
        setIsSubmitting(true);
        try {
          await onSubmit(feedback);
        } finally {
          setIsSubmitting(false);
        }
      }
    };
  
    return (
      <div className="feedback-form">
        <h2>Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="5"
              disabled={isSubmitting}
              required
            />
          </div>
          <div className="button-group">
            <button 
              type="button" 
              onClick={onCancel}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              disabled={isSubmitting || !feedback.trim()}
            >
              {isSubmitting ? 'Sending...' : 'Submit Feedback'}
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Computer Science Study Material Portal</h1>
        <p>Access all your course materials in one place</p>
      </header>
      <main>
        {step === 1 && (
          <UserDetails onNext={(data) => {
            setUserData(data);
            setStep(2);
          }} />
        )}
        {step === 2 && !showFeedback && (
          <SubjectMaterials
            year={userData.year}
            semester={userData.semester}
            onFeedback={() => setShowFeedback(true)}
          />
        )}
        {showFeedback && (
          <FeedbackForm
            onSubmit={handleSubmitFeedback}
            onCancel={() => setShowFeedback(false)}
          />
        )}
      </main>
      <footer>
        <p>Department of Computer Science</p>
      </footer>
    </div>
  );
  
}

export default App;