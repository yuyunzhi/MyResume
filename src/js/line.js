Vue.component('split-line',{
    props:['lineName'],
    template:`
    <div class="splitLine">
        <p><strong>{{lineName}}</strong></p>
        <div class="outLine">
            <div class="inLine"></div>
        </div>
    </div>
    `,

})