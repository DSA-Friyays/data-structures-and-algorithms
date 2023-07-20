''' A company that does a lot of XML processing needs a class for easier
navigation of XML documents. The XML documents always have unique
tag names at a particular nesting level and XML nodes don't have
unnecessary whitespaces between them.
Complete the XmINavigator class so that passing an XML document as
a string to the constructor converts the XML document into a dynamic
object, in which the nodes are accessible as the object's properties and
the inner XML is accessible by the text property.
At the moment, the text property works for the root level of XMLs, and
the root tag is added as a property. Complete the class so that it works
recursively for XMLs with any level.
For example, the below code creates a dynamic object for the given '''


''' XML'
xml = \
"" + \
"" + \
"New York" + \
""
xmlObj = XmlNavigator(xm1)
print(xm10bj.text)
print(xm10bj.State.text if hasattr(xm10bj, "State")
else None)
print(xm10bj.State.City.text if hasattr(xm10bj,
"State") \
and hasattr(xm10bj.State, "City") else None)
and prints:
 New York 
New York
New York '''


# xml doc have a unique tag

import xml.etree.ElementTree as ET 

class XmlNavigator:
    def __init__(self, xml = None):
        self.text = ""
        if xml is not None:
            doc = ET.fromstring(xml)
            self.text = ET.tostring(doc).decode('ascii')
            xml = XmlNavigator()
            print(doc.attrib)
            xml.text = doc.text
            setattr(self, doc.tag, xml)
    
if __name__ == "__main__":
    xml = \
        "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" + \
        "<State>" + \
        "<City>New York</City>" + \
        "</State>"
    
    xmlObj = XmlNavigator(xml)
    
    print(xmlObj.text)
    print(xmlObj.State.text if hasattr(xmlObj, "State") \
        and xmlObj.State.text else None)
    print(xmlObj.State.City.text if hasattr(xmlObj, "State") \
        and hasattr(xmlObj.State, "City") and xmlObj.State.City.text else None)