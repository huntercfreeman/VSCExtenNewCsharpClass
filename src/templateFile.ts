let templateFiles = {
    "templatedComponentCodebehind": getTemplatedCSharpClass("TemplatedComponent", "BlazorExtension")
};

export function getTemplatedCSharpClass(className : string, namespace : string): string {
    return `using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ${namespace}
{
    public class ${className}
    {
    }
}
`;
}