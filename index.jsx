import React from 'react';
import ReactDOM from 'react-dom';
import TemplateAutocomplete from '@lonelyplanet/dotcom-core/dist/templates/autocomplete';

function App() {
    return (
        <TemplateAutocomplete className="mi-clase">
            {{
                keywords: <div>Estas son las palabras clave.</div>,
                results: <div>Estos son los resultados.</div>
            }}
        </TemplateAutocomplete>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
