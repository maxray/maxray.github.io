module Jekyll
  class InstagramTag < Liquid::Tag

    def initialize(tag_name, hash, tokens)
      super
      @hash           = hash.strip!
    end

    def render(context)
      "<div class='embed instagram'>#{iframe_for(@hash)}</div>"
    end

    def iframe_for(hash)
      url = "//instagram.com/p/#{hash}/embed/"
      
      "<style>.embed-container {position: relative; padding-bottom: 120%; height: 0; overflow: hidden;} .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='#{url}' frameborder='0' scrolling='no' allowtransparency='true'></iframe></div>"
    end

  end

end

Liquid::Template.register_tag('instagram', Jekyll::InstagramTag)