let projects = []
fetch('./products.json')
        .then((response) => response.json())
        .then((json) => getData(json))
function product_popular(item){
    const li = document.createElement('li')
    li.className = "product-grid-view product-with-secondary-image product type-product post-689 status-publish first instock product_cat-fresh-juice product_cat-healthy-drinks product_tag-diet-juice product_tag-healthy-choices has-post-thumbnail shipping-taxable purchasable product-type-simple"
    li.innerHTML = `
        <div class="wdt-col wdt-col-xs-12 wdt-col-sm-6 wdt-col-md-6 wdt-col-qxlg-4 wdt-col-hxlg-4 wdt-col-lg-4"
            bis_skin_checked="1">
            <div class="product-wrapper"
                bis_skin_checked="1">
                <div class="product-thumb"
                    bis_skin_checked="1">
                    <a class="image"
                        title="${item.name}"
                        bis_skin_checked="1">
                        <div
                            bis_skin_checked="1">
                            <img decoding="async"
                                src="${item.image}"
                                alt="Shop Primary Image"
                                title="Shop Primary Image">
                        </div>
                    </a>
                </div>
                <div class="product-details"
                    bis_skin_checked="1">
                    <div class="product-title"
                        bis_skin_checked="1">
                        <h5><a
                                bis_skin_checked="1">${item.name}</a>
                        </h5>
                    </div>
                    <div class="product-price"
                        bis_skin_checked="1">
                        <span
                            class="price"><span
                                class="woocs_price_code"
                                data-currency=""
                                data-redraw-id="66bcd61f514eb"
                                data-product-id="689"><span
                                    class="woocommerce-Price-amount amount"><bdi>${item.price} &#8363;</bdi></span></span></span>
                    </div>
                </div>
            </div>
        </div>`
        return li
}
function setProduct_Popular(data){
    const items = data.filter(item=>item.type.indexOf("popular")>-1)
    const ul = document.getElementById("product_popular")
    ul.innerHTML = ''
    console.log(items);
    for (let item of items){
        ul.appendChild(product_popular(item))
    }

}

function product_other(item){
    const div = document.createElement('div')
    div.className = "wdt-column"
    div.setAttribute("bis_skin_checked","1")
    div.innerHTML =
    `
    <div class="wdt-content-item"
            bis_skin_checked="1">
            <div class="wdt-content-media-group"
                bis_skin_checked="1">
                <div class="wdt-content-image-wrapper "
                    bis_skin_checked="1">
                    <div class="wdt-content-image"
                        bis_skin_checked="1"><a
                            href="" target="_blank"
                            rel="nofollow"><img
                                loading="lazy"
                                decoding="async"
                                width="400"
                                height="400"
                                src="${item.image}"
                                class="attachment-full size-full wp-image-558"
                                alt=""
                               ></a>
                    </div>
                </div>
                <div class="wdt-content-elements-group wdt-media-group wdt-media-image-cover"
                    bis_skin_checked="1">
                    <div class="wdt-content-image-wrapper "
                        bis_skin_checked="1">
                        <div class="wdt-content-image"
                            bis_skin_checked="1"><a
                                href=""
                                target="_blank"
                                rel="nofollow"><img
                                    loading="lazy"
                                    decoding="async"
                                    width="400"
                                    height="400"
                                    src="${item.image}"
                                    class="attachment-full size-full wp-image-558"
                                    alt=""></a>
                        </div>
                    </div>
                    <div class="wdt-media-image-cover-container"
                        bis_skin_checked="1"></div>
                </div>
            </div>
            <div class="wdt-content-detail-group"
                bis_skin_checked="1">
                <div class="wdt-content-elements-group wdt-content-group "
                    bis_skin_checked="1">
                    <div class="wdt-content-title"
                        bis_skin_checked="1">
                        <h5><a href=""
                                target="_blank"
                                rel="nofollow">${item.name}</a></h5>
                    </div>
                    <div class="wdt-content-description"
                        bis_skin_checked="1">${(item.detail)?item.detail:""}</div>
                </div>
                <div class="wdt-content-subtitle"
                    bis_skin_checked="1"><span
                        class="woocs_amount_custom_price"
                        data-value="10"
                        data-decimals="-1"
                        data-currency=""><span
                            class="woocs_amount">${item.price} &#8363;</span></span>
                </div>
            </div>
        </div>
    `
    return div
}

function setProduct_Other(data){
    const items = data.filter(item=>item.type.indexOf("other")>-1)
    const ul = document.querySelectorAll(".product_others")
    ul[0].innerHTML = ''
    let i=0,j=0
    for (let item of items){
        ul[i].appendChild(product_other(item))
        
        if (j==4) {
            i++
            ul[i].innerHTML = ''
        }
        j++
    }

}

function getData(data){
    console.log(data);
    setProduct_Popular(data)
    setProduct_Other(data)
}