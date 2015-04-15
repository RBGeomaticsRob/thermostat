require 'sinatra'

set :public_folder, proc { File.join(root) }

post '/temperature_change' do
  headers 'Access-Control-Allow-Origin' => '*'
  'hello world'
end
