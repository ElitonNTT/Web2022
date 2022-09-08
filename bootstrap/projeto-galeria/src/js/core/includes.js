import $ from 'jquery'

const loadHtmlSuccessCallBacks = []

export function onLoadHtmlSuccess(callback){
  if(!loadHtmlSuccessCallBacks.includes(callback)){
    loadHtmlSuccessCallBacks.push(callback)
  }
}

function loadIncludes(parent){
  if(!parent) parent = 'body'
  $(parent).find('[wm-include]').each(function(index, elemento){
    const url = $(elemento).attr('wm-include')
    $.ajax({
      url,
      success(data){
        $(elemento).html(data)
        $(elemento).removeAttr('wm-include')

        loadHtmlSuccessCallBacks.forEach(callback => callback(data))
        loadIncludes(elemento)
      }
    })
  })
}
loadIncludes()