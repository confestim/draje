// GitHub-style callouts processor
document.addEventListener('DOMContentLoaded', function() {
    // Process all blockquotes in the content
    const blockquotes = document.querySelectorAll('.prose blockquote');
    
    blockquotes.forEach(function(blockquote) {
        const firstChild = blockquote.firstElementChild;
        
        // Check if the first child is a paragraph and contains callout syntax
        if (firstChild && firstChild.tagName === 'P') {
            const text = firstChild.textContent.trim();
            
            // Match GitHub callout syntax: [!TYPE]
            const calloutMatch = text.match(/^\[!(NOTE|WARNING|IMPORTANT|TIP|CAUTION)\]/i);
            
            if (calloutMatch) {
                const calloutType = calloutMatch[1].toLowerCase();
                
                // Set the data attribute for styling
                blockquote.setAttribute('data-callout', calloutType);
                
                // Remove the [!TYPE] from the text and update the paragraph
                const cleanText = text.replace(/^\[![A-Z]+\]\s*/, '');
                if (cleanText) {
                    firstChild.textContent = cleanText;
                } else {
                    // If the paragraph only contained the callout marker, remove it
                    firstChild.remove();
                }
            }
        }
    });
});
