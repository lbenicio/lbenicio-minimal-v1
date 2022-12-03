abort('Please run this using `bundle exec rake`') unless ENV["BUNDLE_BIN_PATH"]
require 'html-proofer'

desc "Test the website"
task :test do
  sh "bundle exec jekyll build"
  options = {
    :check_sri => false,
    :check_external_hash => true,
    :disable_external => true,
    :check_favicon => false,
    :check_html => true,
    :check_img_http => true,
    :check_opengraph => true,
    :enforce_https => true,
    :cache => {
      :timeframe => '6w'
    },
    :validation => { 
      :report_eof_tags => true,
      :report_invalid_tags => true,
      :report_mismatched_tags => true,
      :report_missing_doctype => true,
      :report_missing_names => true,
      :report_script_embeds => true
    }
  }
  begin
    HTMLProofer.check_directory("_site/", options).run
  rescue => msg
    puts "#{msg}"
  end
end

desc "Release v#{version}"
task :release => :build do
  current_branch = `git branch`.to_s.strip.match(%r!^\* (.+)$!)[1]
  unless current_branch == "main" || current_branch.end_with?("pagination")
    puts "You must be on the main branch to release!"
    exit!
  end
  sh "gem push pkg/#{name}-#{version}.gem"
end

desc "Build #{name} v#{version} into pkg/"
task :build do
  mkdir_p "pkg"
  sh "gem build #{gemspec_file}"
  sh "mv #{gem_file} pkg"
end

task :default => [:test]
