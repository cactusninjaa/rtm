import Accordion from './Accordion'
import { useState } from 'react'
import Title from './atoms/Title'
import './App.css'

export default function App() {
  const data = [
      {
        id: 1,
        title: "What is Github and how does it work?",
        content:
          "GitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you’re just getting started with GitHub, you may know us best as a place for version control and collaboration.",
        state: false
      },
      {
        id: 2,
        title: "How do I see GitHub's availability?",
        content: "Check our real-time status report",
        state: false
      },
      {
        id: 3,
        title: "Why is GitHub so popular?",
        content:
          "GitHub is built by developers for developers, and we’re proud to be home to the world’s largest open source community. With 50 million developers and millions more open source projects, GitHub has become the go-to place to collaborate and build software together.",
        state: true
      },
  ]

  return (
    <>
      {
        data.map((question) => 
          <> 
            <Accordion key={question.id} question={question}/>
            <hr />
          </>
        )
      }
    </>
  )
}
