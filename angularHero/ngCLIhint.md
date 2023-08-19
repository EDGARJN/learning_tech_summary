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

- ## @ViewChild
    - The ``@ViewChild`` decorator in Angular is used to obtain a reference to an element or directive from the template, allowing you to interact with that element or directive in your component class


- ## Directives
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

- **note** directive focused on behavior and manipulation of the DOM

                

- **Service and Dependency Injenction**
    - This is way of sharing service to any component in the app as more as it needed.
    - Steps to inject service to components are:
        - Import service class into the component
        - initialize constructor with constructor params of type service class
        - includes service name inot the providers section that found in the @component Decorator

    - Inject Service into another Service:
        - In order to inject one service into another service you need to include injectable decorator ``@Injectable()`` in both services.
        - e.g: I need to inject logService into Accounts Service so as I can get log in every user registration activity
            ```
                // Service 1
                @Injectable()
                class LogService{
                    // Logic Here
                }


                // Service 2
                @Injectable()
                class AccountService{
                    constructor(private logService:LogService){}

                    onUserRegistration(){
                        // Logic Here
                    }
                }
            

            ```

        - **Good Practice**
            ``` 
                // service
                @Injectible({providedIn: "root"})
                export class MyService{
                    
                }
            ```

- ## ROUTING
    - Is the mechanism that put association between component and URL, It allow user to navigate from one view(Component) to another without loading a page. Routing help consist the Single Page Application(SPA) and main app state

    - **Angular Routing includes**
        - **Routes Configuration**
            - here you configure your route by mapping url path into its componet
            - all routes are configured in the app module so as to be accessed over the all application.
            - Declare your routes list with type ``Routes``, that contain an object which include ``path`` and ``component`
            - e.g:
                ```
                    import {Routes,RouterModule} from "angular/route"

                    const appRouter:Routes = [
                        {path:"path-name", component:ComponentName},
                        {path:"path-name2", component:ComponentName2},
                        {path:"not-found",component:NotFoundComponent},
                        {path:"**", redirectTo:"/not-found} // this wildcard path ensure that if user enter wrong url path will be redirected to not found component. 
                    ]

                    @NgModule({
                        imports:[
                            RouterModule.fromRoot(appRouter)
                        ]
                    })
                ```
        - **Render Component (Router Outlet)**
            - To render a componet that mapped in specific ``url`` you should use angular router directive called ``router-outlet``
            - add ``<router-outlet></router-outlet>`` to the template that you need your component mapped into url path to be rendered.

        - **Navigation**
            - You can navigate through your component that mapped into your url path by using Routes Service called ``Router`` that has method called ``navigate`` 
            - e.g:
                ```
                    onButtonClciked(){
                        Router.navigate(["/path-name"])
                    }
                ```
            - To enable navigation menu bar item to work, i.e ``anchor <a> `` tag we should replace ``href=""`` with ``routerLink="/route-link-that specified in the path of appRoutes Object"`` with leading ``/``

            - e.g:
             ```
                <a routerLink="/">Home</a>
                <a [routerLink]="["/users"]">Users</a>  <!--  I use property binding -->
            ```
            - enable navigation bar menu item to be active when user click it: You should use and add: property ``routerLinkActive="className"``  for bootstrap we set ``className`` = ``active``
            - e.g:
            ```
                <div routerLinkActive="active" [routerLinkActiveOptions={exact:true}]> <a  routerLink="/" >Home</a></div>
                <dive routerLinkActive="active"> <a routerLink="/users">Users</a></dive>
            ```
            - note: in the first anchor tag(Home) we add routerLinkOption to deactivate Home element when user change routes by clicking other navigation element item. As you see in every item's routes include ``/`` that means ``Home`` so without telling ``Home`` item that should be active only and only when link is ``/`` without any trailing routes path.

        - **URL Parameter**
            - You can pass parameter in the URL configured in the appRoutes by add ``/:parameter_name`` in the  url trail.
            - We use ``ActivatedRoute`` Service to access the parameter passed in the URL
            - So in order to use this service first we need to **injenct** it in our component
                - e.g:
                    ```
                        id:string 
                        constructor(private route:ActivatedRoute){}
                        
                        // The value accessed on component initialization
                        // will never change until the component is reinitiliaze
                        ngOnInit(){
                        this.id = this.route.snapshot.params['id'];
                        }

                        // to solve above issue replace "this.id = this.route.snapshot.params['id'];" with ``this.route.params.subscribe((param:Params)=>{
                            this.id = params['id'];
                        })``
                    ```

                - Use subscribe when you're sure that prameter will be changed after app initizilized.

                - Query Parameters  and fragment
                    - add data bindind in the menu item link
                        - 
                        ```
                        <a [routerLink]="["/users","edit"]" [queryParams]="{allowEdit:1}"  [fragment]="'loading'">Users</a>
                        
                        ```

                    - Programatic
                        ```
                          onClickButton(){
                            this.route.navigate(["/path-name","edit"],{queryParams:{allowEdit:1},fragment:"loading"})
                          }
                        ```
                    - Access Data
                        - ``this.route.snapshot.queryParams;``
                
  


    - **Redirected and WildCard Route**
        - Redirected Route
            - This ensure when user enter a certain url will be redirected to certain component
        - Wildcard Route
            - This ensure that if user enter wrong url path or path that not found in our routes array will redirected to not found component: ``{path:"**",component:NotFoundComponent}``

    - Outsourcing the routes
        - As the application grow it can more routes that can make our app-module feel boared :) So we need to outsource our routes and import them to app-module
        - 
        ```
        // app-routing-module.ts
        appRoutes:Routes = [
            {path:"",component:HomeComponent},
            {path:"about",component:AboutComponent}
        ]

        @NgModule({
            imports:[
                RouterModule.forRoot(appRoutes)
            ],
            export:[RouterModule]
        })

        export class OutSourcingRoutes{

        }
        
        ```

        - let use in our app.module.ts
        ```
            import {OutSourcingRoutes} from 'app-routing-module.ts
            // import into app.module.ts in the imports sections

            @NgModule({
                declaration:[],
                imports:[OutSourcingRoutes],
                providers:[],
                bootstrap"[]
            })
        ```

    - **Routes Protection(Guard)**
        - canActivate ?
        - canActivateChild ?






- ## **NgOnInit**
    - It provides a place for you to perform initialization tasks that should occur after the component or directive has been instantiated and its inputs are available, but before it's displayed on the screen.



## PLANNING ANGULAR APP
- Root Component
    - Child component
        - Features
- Model (Data) 
    - How you're arranging your data



    






        
