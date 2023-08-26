### HELLO BOOTSTRAP..
- Here I'll write some basic bootstrap class for helping us ``begginer`` come and cheat when something bad(forgeting behavior) attack us :)

 - button
    - primary button (with like blue color)
        - ``<button class="btn btn-primary">Primary Button </button>``
    - Danger button (with like red color)
        - ``<button class="btn btn-danger">Primary Button </button>``
    - for more info [click Here](https://getbootstrap.com/docs/5.0/components/buttons/)

    - button group
        ```
           <div class="btn btn-group">
                <button class="btn btn-primary">primary</button>
                <button class="btn btn-danger">Danger</button>
            </div>
        ```

- Text
    - background Color
        - ``<p class="text bg-primary">I've primary background color</p>``

- margin and paddig
    - ``m`` for all direction margin and ``p`` for all direction padding
        ```
            <div class="bg-primary m-1 p-1">Small margin and padding</div>
            <div class="bg-danger m-5 p-5">Large margin and padding</div>

            mt - margin top
            mb - margin bottom
            ms - margin start(left)
            me - margin end(right)
            pt/pb - padding-top/padding-btm
            ps/pe - padding start(left)/end(right)

        ```
- Border
    ```
        <!-- default border -->
        <div class="m-5 border border-primary">Default border</div>

        <!-- only top and left -->
        <div class="m-5 border-top border-start border-danger">Border top and left</div>

        <!-- bottom right with corner radius -->
        <div class="m-5 p-3 border-bottom border-end rounded border-success">Bottom border,right with corner ronded</div>

        <!-- like pill border and thnketh -->
        <div class="m-5 p-3 border-info border-5 rounded-pill border-start border-bottom">Like Pill Rounded Border and 5 thinketh with like blue color</div>
    ```

- Box Shadow
    ```
        <div class="m-3 p-3 shadow-sm">Small Shadow</div>
        <div class="m-3 p-3 shadow">Medium Shadow</div>
        <div class="m-3 p-3 shadow-lg">Large shadow</div>
    ```

- Font Weight
    ```
        <p class="m-5 p-3 fw-bold">Bold Paragraph</p>
        <p class="m-5 p-3 fw-bolder">Bolder Paragraph</p>
        <p class="m-5 p-3 fw-light">Light Paragraph</p>
        <p class="m-5 p-3 fst-italic">Italic Paragraph</p>

        <!-- it combine margin/padding border and fontweight styles -->
        <p class="m-5 p-3 border-bottom border-start rounded border-success border-3 fw-bolder fst-italic">I'm ASET</p>
    ```

- Container `` Building Block :) `` [more about container](https://getbootstrap.com/docs/5.0/layout/containers/)
    ```
        <div class="container my-5">100% width only it reach it's maximu width(phone width)</div>

        <div class="container-fluid mb-3">Always 100% width for every screen</div>

        <div class="container-lg my-3">100% width only from medium screen(768px) to extra small(576)</div>
    ```

- Grid
    - Is the way of placing/divide container in rows and columns.
    - note: It's always Grid going inside a container
    - 12 cols is the maximum number of cols in one row within a container
    -   
        ```
            <!-- automatic divide equal width for each col -->
            <div class="container-lg my-3">
                <div class="row">
                    <div class="col mx-3 bg-primary">
                        <div class="p-3">Col 1</div>
                    </div>
                    <div class="col mx-3 bg-primary">
                        <div class="p-3">Col 2</div>
                    </div>


                    <div class="col mx-3 bg-primary">
                        <div class="p-3">Col 3</div>
                    </div>
                </div>
            </div>

        <!-- specify width manually -->

        <div class="container my-3">
            <div class="row">
                <div class="col-7  ">
                    <div class="p-3 bg-danger">Col 1 man</div>
                </div>
                <div class="col-2 ">
                    <div class="p-3 bg-danger">Col 2</div>
                </div>
                <div class="col-3  ">
                    <div class="p-3 bg-primary">Col 3</div>
                </div>
            </div>
        </div>

        <!-- responsive -->
        <div class="container my-3">
            <div class="row">
                <div class="col-sm-4 col-lg-7 col-md-6"><p class="fw-bold bg-primary p-3">Large in evry screen but small</p></div>
                <div class="col-sm-4 col-lg-1 col-md-4"><p class="fw-bold bg-success p-3">equal,smallest,smaller,</p></div>
                <div class="col-sm-4 col-lg-4 col-md-2"><p class="fw-bold bg-danger p-3">equal,small,smallest</p></div>
            </div>
        </div>

        <!-- justify -->
        <div class="container my-2">
            <div class="row justify-content-center">
                <div class="col-3 mx-3 bg-primary">
                    <div class="p-3">Col 1</div>
                </div>
                <div class="col-3 mx-3 bg-primary">
                    <div class="p-3">Col 2</div>
                </div>


                <div class="col-3 mx-3 bg-primary">
                    <div class="p-3">Col 3</div>
                </div>
            </div>
        </div>

        ```