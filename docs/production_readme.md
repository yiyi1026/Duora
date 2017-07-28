Duora

[Duora live][heroku]
[heroku]: https://duora.herokuapp.com/

Duora is a full-stack web application inspired by Quora. It utilizes React.js with a Redux architectural framework on the frontend, a PostgreSQL database Ruby on Rails on the backend.

Features & Implementation

Questions Searching and Rendering

On the database side, each question is stored in one table in the database, which contains attributes to id, user_id, title, body, created_at and updated_at. Upon login, an API call is made to the database to fetch the user information. All questions are held in the QuestionStore until the user's session is destroyed or redirect to other urls.

Searching questions is a standard feature of Quora. I use ActiveRecord query method to create a fuzzy search of questions and questions. This search will look go through titles of all questions for matching result, which is case insensitive.

Questions are rendered in two different components: the CondensedQuestion components, which show the title and first few words of the question content, and the ExpandedQuestion components, which are editable and show all question text. The QuestionIndex renders all of the questions as subcomponents, as well as one ExpandedQuestion component, which renders based on QuestionStore.selectedQuestion(). The UI of the QuestionIndex is taken directly from Quora for a professional, clean look:

image of question index

Question editing is implemented using the Quill.js library, allowing for a Word-processor-like user experience.

Answers

Each answer, which contains attributes to id, question_id, author_id, body, is referenced to a specific question. Each answer belongs to a question and an author (user)
Implementing Questions started with a question table in the database. The Question table contains two columns: title and id. Additionally, a question_id column was added to the Question table.

The React component structure for questions mirrored that of questions: the QuestionIndex component renders a list of CondensedQuestions as subcomponents, along with one ExpandedQuestion, kept track of by QuestionStore.selectedQuestion().

QuestionIndex render method:

render: function () {
  return ({this.state.questions.map(function (question) {
    return <CondensedQuestion question={question} />
  }
  <ExpandedQuestion question={this.state.selectedQuestion} />)
}
Tags

As with questions, tags are stored in the database through a tag table and a join table. The tag table contains the columns id and tag_name. The tagged_questions table is the associated join table, which contains three columns: id, tag_id, and question_id.

Tags are maintained on the frontend in the TagStore. Because creating, editing, and destroying questions can potentially affect Tag objects, the QuestionIndex and the QuestionIndex both listen to the TagStore. It was not necessary to create a Tag component, as tags are simply rendered as part of the individual Question components.

tag screenshot

Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project. The next steps for Duora are outlined below.

Search



Direct Messaging

Although this is less essential functionality, I also plan to implement messaging between Duora users. To do this, I will use WebRTC so that notifications of messages happens seamlessly.
