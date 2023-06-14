# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = 'lbenicio-minimal-v1'
  spec.version       = '1.0.9'
  spec.authors       = ['Leonardo Benicio']
  spec.email         = ['developer@lbenicio.dev']

  spec.summary       = 'Personal website and blog theme.'
  spec.description   = 'A minimal theme for jekyll to be used on personal website and blogs..'
  spec.homepage      = 'https://github.com/lbenicio/lbenicio-minimal-v1'
  spec.license       = 'GPL-3.0'

  all_files       = `git ls-files`.split("\n")
  spec.files         = all_files.grep(%r!^(_includes|_layouts|assets|benchmark|rubocop|.ruby-verison|.rubocop.yml|Gemfile|lbenicio-minimal-v1.gemspec|Rakefile|LICENSE)/|^.rubocop.yml$!)

  spec.add_runtime_dependency 'jekyll-seo-tag', '~> 2.7.1'
  spec.add_development_dependency 'bundler', '~> 2.2.31'
  spec.add_development_dependency 'jekyll', '~> 4.2.0'
  spec.add_development_dependency 'jekyll-archives', '~> 2.2.1'
  spec.add_development_dependency 'jekyll-feed', '~> 1.12'
  spec.add_development_dependency 'jekyll-minifier', '~> 0.0.3'
  spec.add_development_dependency 'jekyll-paginate-v2', '~> 3.0.0'
  spec.add_development_dependency 'jekyll-sitemap', '~> 1.12'
  spec.add_development_dependency 'jekyll-tagging', '~> 1.1.0'
  spec.add_development_dependency 'jekyll-tagging-related_posts', '~> 1.3.0'
end
