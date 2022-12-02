# frozen_string_literal: true

source 'https://rubygems.org'

gem 'jekyll', '~> 4.2.0'
gem 'minima', '~> 2.5'

group :jekyll_plugins do
  gem 'jekyll-feed', '~> 0.12'
  gem 'jekyll-minifier'
  gem 'jekyll-seo-tag'
  gem 'jekyll-sitemap'
end

gem 'rake'
gem 'rouge'

group :development, :test do
  gem 'benchmark-ips'
  gem 'capybara'
  gem 'chromedriver-helper'
  gem 'html-proofer', '~> 3.19.4'
  gem 'httpclient'
  gem 'jekyll_test_plugin'
  gem 'jekyll_test_plugin_malicious'
  gem 'memory_profiler'
  gem 'pry'
  gem 'rack-jekyll'
  gem 'rbtrace'
  gem 'rspec'
  gem 'rubocop'
  gem 'rubocop-minitest'
  gem 'rubocop-performance'
  gem 'rubocop-rake'
  gem 'rubocop-rspec'
  gem 'ruby-prof'
  gem 'selenium-webdriver'
  gem 'stackprof'
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem 'tzinfo', '~> 1.2'
  gem 'tzinfo-data'
end

# Performance-booster for watching directories on Windows
gem 'wdm', '~> 0.1.1', platforms: %i[mingw x64_mingw mswin]
