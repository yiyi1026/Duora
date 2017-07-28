import React from 'react';

class TopicEditForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name: '',
            topics_p: [],
            showSearch: false,
            loading: true
        }
        this.handleSearchTopics = this.handleSearchTopics.bind(this);
        this.handleTopicFieldUpdate = this.handleTopicFieldUpdate.bind(this);
        this.handleAddTopic = this.handleAddTopic.bind(this);
        this.triggerQuestionTopicsUpdate = this.props.triggerQuestionTopicsUpdate.bind(this);
    }

    handleAddTopic(e){
        console.log(e.currentTarget.id)
        let newTopics = [...this.state.topics_p, this.props.topics.byId[e.currentTarget.id]];
        this.setState({topics_p: newTopics, name: ''});
        this.triggerQuestionTopicsUpdate(newTopics);
    }

    handleSearchTopics(query) {
         this.props.searchTopics(query)
            .then(() => this.setState({showSearch: true}));
    }

    componentDidMount() {
        this.setState({'loading': false});
    }

    handleTopicFieldUpdate(e) {
        return e => {
            if (e.target.value) {
                this.handleSearchTopics(e.target.value);
            }
            this.setState({'name': e.target.value});
        };
    }

    render(){
        if (this.state.loading){
        return(<div></div>);
        }
        // 
        console.log(this.state)
        const querystr = this.state.name;
        let reg = new RegExp(querystr, 'gi');
        let topics = this.props.topics;
        console.log(this.props)
        // console.log(this.props);
        let searchIds = this.props.topics.searchIds;
        console.log(searchIds)
        let searchedTopicsForm = '';
        let searchedTopics = '';
        let topic_pills = '';
        if(this.state.showSearch && searchIds){
        searchedTopics = searchIds.map((id) => {
            let final_str = topics.byId[id].name.replace(reg, (str) => {
            return '<b class="matchingText">' + str + '</b>'
            });

            return (
            <li key={`search${id}`} className="search_question_dropdown_item">
                <a id={id} onClick={this.handleAddTopic} className="grey">
                <span dangerouslySetInnerHTML={{
                    __html: final_str
                }}></span>
                </a>
            </li>
            )
        });

        if (searchIds && searchIds.length > 0 && this.state.name.length > 0) {
            searchedTopicsForm = (
            <ul className="search_topic_dropdown">
                {searchedTopics}
            </ul>
            );
        }
        } else {
            searchedTopics = '';
            searchedTopicsForm = '';
        }
        if(this.state.topics_p.length>0){
            topic_pills = this.state.topics_p.map((topic) => {
            
            return (
            <div className="container" key={`topicpill${topic.id}`}>
                <a className='btn grey' id={topic.id}>
                    <span className="glyphicon glyphicon-remove"></span>
                </a>
                <span className="topic-pill" id="">{topic.name}</span>
            </div>
            )
        });
        } else{
            topic_pills = "";
        }

        return(
           <div className="top-margin-10">
                <div>
                <input className="search-topic-bar" type="text" onChange={this.handleTopicFieldUpdate()} value={this.state.name}
                    placeholder='Choose topics...'/>
                {searchedTopicsForm}
                </div>
                {topic_pills}
            </div>

        )
    }
}

export default TopicEditForm;