### Let's Learn Angular


#### **Core Ideas Behind Angular**
- **Component**
    - It includes a Typescript Class with @component() decoration, html templates, and styles
    - @componet() decorator specifies the following angular informations:
        - CSS selector which defines how the compnent is used in the template.
        - HTML template that instruct the angular how to render the component

- **Templates**
    - each component has template that declares how that component rendered
        - should understand *ngIF and *ngFor **directives**

- **Dependency Injection** 
    - This means providing or injecting a dependency or class into a constructor
- **Angular CLI**
    - Is the fastest,straightforward and recommended way to develop Angular application


### **SETTING UP ANGULAR LOCAL ENIRONMENT**
- To install  angular cli `` npm install -g @angular/cli ``
- create new project `` ng new app-name ``
- start your project `` ng serve -o ``
    - If you get EADDR (address already in use) try to start your angular project by specifying PORT number `` ng serve --port PORTNUMBER``
- note: > Thank you for sharing pseudonymous usage data. Should you change your mind, the following
            command will disable this feature entirely: ``ng analytics disable --global``


### I should know these:
- How to handle events and display data in angular
- Components 
- Directives
- Templates driven forms
- Reactives forms
- Consuming http services
- Routing and navigation
- Authentication and authorization 
- Deployment  
- Building real-time,serverless application with firebase

    1. Components
        - Things contained in component
            - Data (Service)
            - HTML templates 
                - interpolaration `` {{}} ``
                - directives (used to manipulate DOM element)  `` *ngFor  -looping over an array  and  *ngIf -condition statement `` and more
            - Logic 

        
        - steps to build components
            - Create a component
            - Register it in a module
            - Add an element in HTML markup
        
        - **Note:** Angular CLI to generate and setup component for you through following above steps
            - ``ng g c componentName``
                - g -stand for generate
                - c -stand for component 
        
        - Service
            - This is a activity that bring and provide data to an angular component those service are HTTP Requests
            -  To accomplish this, angular devs :) recommmend to use service class and inject it into component class as dependenct through a process known as dependency injenction.
            - Note: make sure you register service class that need to be injected into **provider** section at app module by add the name of service class   

            - **Note:** Use this angular cli to genetate service => ``ng g s servicename  e.g: ng g Email``;

    - App Module:
        -    when you create a new angular app you'll see a file called ``app.module.ts`` this is file that contain modules, 
            > Module is a function/component of the application that is exported to be used in other module. So mainly all module/component is stored in the app module 

    - Angular  Module
        - **FormsModule** `` import {FormsModule} from "@angular/forms" ``
            - `` add FormsModule into imports section at app module``
            - This tell angular thay you need to import some forms features
            - after import this module you can use listener directive that will listen and tract every user input in the formfield
                - directives ``use [(ngModel)]='name'  inside input field to track user input and assign it into  name``

    - styles Properties binding: ``[ngStyle]="{styles rules}"``
    - structure Directives - ``*ngFor, *ngIf``


    - Bootstrap
        - When you need to use bootstrap in your angular project follow the following steps:
            1. ``npm i -s bootstrap
            2. change **"styles"** setup that found in *angular.json* from using default ``src/style.css`` to bootstrap by adding bootsrap style from the ``node_modules`` as shown below
            ``` 
            "styles": [
                "node_modules/bootstrap/dist/css/bootstrap.min.css",
                "src/style.css"
            ] 
            ```

            3. After changing run restart your project 


 - DataBinding
    - Interpolation 
    - Property Binding [ property ] = "data"
        - this mainly play with DOM behavior e.g to disable button
        - deal with output

    - Event Binding ( (event) = "expression" )
        - deals with reaction after a specific event
        - what should happen when I click/hover/longPressed a button?
        - what should happen when I start writting in the field1

    - Two way binding [ (ngModule) ] = "expression"
        - Reacting to event in both two direction


- Customer property binding []
    - There's scenerio in which you need to create a customer property so as you can pass data from parent component to its children... we use the following steps
        - Define data type of the property into child component.
        - use input decorator ``@Input()`` to expose your property so as to be used in child component
        - **note:** To pass data from parent component to the children component we use custom property ``[]``

### TO INFORM PARENT ABOUT CHANGES
- create an instance of``EventEmitter<dataType>()`` class
- add ``@output()`` decorator.
- use ``emit()`` method to update our exposed variable(instance);
- eg: 
```
    @Output() feature = EventEmitter<Strring>();
    addFeature(newF:String){
        this.feature.emit(newF);
    }
```
- when you need to use it in the parent component use bracket to call event and assign its value to the parent method: ``(feature)="newFeature($event)"``


- Custom event property
    - EventEmitter ?? 
- Component angular life cycle
    - ngOnchange
    - ngOnInit
    - ngDoCheck
    - ngAfterContentInit
    - ngAfterContentChecked
    - ngAfterViewInit
    - ngAfterViewChecked
    - ngOnDestroy

- Before You sleep
    - Undersand directive
        - Structured Directives and Attribute Directive
    - @viewChild


- Directives
    - Structured Directives
        - change the structure of the DOM by adding or removing an element
            - ``*ngFor``
            - ``*ngIf=""``
            - ``[ngSwitch]``
        - **note:**  asterik(*) indicate a structural directives

        - **Custom Structured Directives
            - for custom *ngIF directives:
                - remember to use **TemplateRef** for template reference and **ViewContainer** for viewing referenced template.


    - Attribute Directives
        - Change appearance or behavior of the web
        ``[NgClass] = "[className: condition/expression]"`` 

        -  **Custom attribute directives**
            - a way to extend the capabilities of the framework by creating your own reusable behaviors that can be applied to elements in the DOM
            - Creating custom directives can significantly enhance code organization, reusability, and maintainability in your Angular projects

            - Generate custom directive in CLI ``ng g d directiveName``
            - note: When you create a custom directive make sure to include ``ElementRef and Renderer2`` by importing from ``@angular/core``
            - e.g:
                ```
                    import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

                    @Directive({
                    selector: '[appItemColor]'
                    })
                    export class ItemColorDirective implements OnInit {

                    constructor(private elR:ElementRef, private renderer:Renderer2) { }

                    ngOnInit(): void {
                        this.renderer.setStyle(this.elR.nativeElement, "backgroundColor","blue");
                    }

                    }
                ```
            - **Renderer2**
                -  is an important service provided by Angular that allows you to interact with the DOM (Document Object Model) in a way that's consistent across different environments, including web browsers and server-side rendering.

                - Some common tasks you can perform using Renderer2 include:

                    - **Creating Elements:** You can create new DOM elements using the createElement method.

                    -   **Adding and Removing Elements:** You can add or remove elements to/from the DOM using appendChild, removeChild, and related methods.

                    -   **Modifying Element Properties:** You can change element properties such as attributes, classes, styles, and text content using methods like setAttribute, addClass, setStyle, and setText.

                    -   **Listening to Events:** You can attach event listeners to elements using listen.

            
            - **@HostListener(eventSupportedByTheDOM)**
                - is a decorator in Angular that allows you to listen for events on the host element of a directive or component.
                - e.g:
                    ```
                         @HostListener("mouseenter") onMouseOver(){
                            console.log("User Arrive Here");
                        }
                    ```
                - Using @HostListener is a clean and declarative way to add interactivity and behavior to your components and directives without directly manipulating the DOM or handling events in your component's template. It helps to encapsulate behavior in a more organized and maintainable manner.

                - here's a list of common mouseevent and keyboard  DOM events that you can listen to using @HostListener:
                    - Mouse Events:
                        - 'click'
                        - 'dblclick'
                        - 'mousedown'
                        - 'mouseup'
                        - 'mouseenter'       
                        - 'mouseleave'
                        - 'mousemove'
                        - 'mouseout'
                        - 'mouseover'
                    
                    - Keyboard Events:
                        - 'keydown'
                        - 'keyup'
                        - 'keypress'

            - @HostBinding("style.property")

                

- **Service and Dependency Injenction**
    - 




- **note** directive focused on behavior and manipulation of the DOM

- ## **NgOnInit**
    - It provides a place for you to perform initialization tasks that should occur after the component or directive has been instantiated and its inputs are available, but before it's displayed on the screen.



## PLANNING ANGULAR APP
- Root Component
    - Child component
        - Features
- Model (Data) 
    - How you're arranging your data
    





        
