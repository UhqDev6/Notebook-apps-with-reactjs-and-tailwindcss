import React from "react";
import { NotebookContainer } from "../components/molecules/NotebookContainer";
import { NotebookForm } from "../components/molecules/NotebookForm";
import { NotebookHeader } from "../components/molecules/NotebookHeader";
import { getInitialData as getData } from "../utils";


export class Notebook extends React.Component {
    constructor(props) {
        super(props);

        //initialize state
        this.state = {
            notebooks: getData(),
            title: "",
            body: "",
            search: ""
        };

        //binding 
        this.eventHandlerDeleteNotebook = this.eventHandlerDeleteNotebook.bind(this);
        this.eventHandlerArsipNotebook = this.eventHandlerArsipNotebook.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onNotebookChange = this.onNotebookChange.bind(this);

    }

        eventHandlerDeleteNotebook(id){
            this.setState((previousState) => {
                const listData = previousState.notebooks;
                const filteredlistData = listData.filter(item => item?.id !== id);
                return {
                    notebooks: filteredlistData,
                };
            });
        }
    
        eventHandlerArsipNotebook (id) {
            this.setState((previousState) => {
                const { notebooks } = previousState;
                const indexData = notebooks.findIndex(item => item?.id === id);
        
                if (notebooks[indexData].archived === true) {
                    notebooks[indexData].archived = false;
                } else {
                    notebooks[indexData].archived = true;
                }
        
                return {
                    notebooks,
                };
            });
        }

        onNotebookChange = (event) =>  {
            this.setState(() => {
                return {
                    body: event.target.value,
                };
            });
        }
    
        onTitleChange = (event) =>  {
            if (event.target.value.length <= 50) {
                this.setState(() => {
                    return {
                        title: event.target.value,
                    };
                });
            }
        }
    
        onSubmitEventHandler = (event) =>  {
            event.preventDefault();
            const generateId = +new Date();
            this.setState(({ notebooks, title, body }) => {
                return {
                    notebooks: [
                        ...notebooks,
                    {
                        id: generateId,
                        title,
                        body,
                        archived: false,
                        createdAt: +new Date()
                    },
                    ],
                };
            });
        }
    
        onSearchEventHandler = (event) =>  {
            this.setState(() => {
                return {
                    search: event.target.value,
                };
            });
        }

        
        render() {
            return(
                <>
                    <NotebookHeader
                        search={this.search}
                        onSearchEventHandler={this.onSearchEventHandler}>
                    </NotebookHeader>
                    <main className="">
                        <aside className="flex justify-center mt-10">
                            <NotebookForm
                                title={this.state.title}
                                body={this.state.body}
                                onTitleChange={this.onTitleChange}
                                onNotebookChange={this.onNotebookChange}
                                onSubmitEventHandler={this.onSubmitEventHandler}>
                            </NotebookForm>
                        </aside>
                        <article className="flex justify-center mt-10">
                            <NotebookContainer
                            search={this.state.search}
                            desc={"Active Document"}
                            notebooks={this.state.notebooks.filter(item => item?.archived === false)}
                            eventHandlerDeleteNotebook={this.eventHandlerDeleteNotebook}
                            eventHandlerArsipNotebook={this.eventHandlerArsipNotebook}>
                            </NotebookContainer>
                            <NotebookContainer
                            search={this.state.search}
                            desc={"Archives Document"}
                            notebooks={this.state.notebooks.filter(item => item?.archived === true)}
                            eventHandlerDeleteNotebook={this.eventHandlerDeleteNotebook}
                            eventHandlerArsipNotebook={this.eventHandlerArsipNotebook}>
                            </NotebookContainer>
                        </article>
                    </main>

                </>
            );
        }
}